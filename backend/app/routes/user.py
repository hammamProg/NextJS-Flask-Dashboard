from app.model import User
from app import db
from flask import Blueprint,request,jsonify
import re

user_bp = Blueprint('user_bp', __name__,template_folder='templates')


@user_bp.route('/user/<int:id>')
def user(id):
    '''
        retrieve a user by id
        
        Args:
            id (int): the id of the user
        
        Returns:
            json: the user object
    '''
    user = User.query.get(id)
    if not user:
        return jsonify({'error':'user not found'}),404
    return jsonify(user.to_dict()),200

@user_bp.route('/user', methods=['GET'])
def users():
    '''
        retrieve all users from the database as json
        
        Returns:
            json: list of user objects
    '''
    users:User = User.query.all()
    users = [user.to_dict() for user in users]
    return jsonify(users),200

@user_bp.route('/user',methods=['POST'])
def register_user():
    '''
        register a new user
        
        Returns:
            json: the new user object
    '''
    data = request.get_json()
    
    phone = data.get('phone')
    # use regex to validate phone number
    if phone and not re.match(r'^\+?1?\d{9,15}$', phone):
        return jsonify({'error':'invalid phone number'}),400
    
    email = data.get('email')
    # validate email
    if email and not re.match(r'^\S+@\S+\.\S+$', email):
        return jsonify({'error':'invalid email'}),400
    # check if the email already exists
    if User.query.filter_by(email=email).first():
        return jsonify({'error':'email already exists'}),400
    
    
    rating = data.get('rating')
    if rating and not 0<=int(rating)<=5:
        return jsonify({'error':'invalid rating'}),400
    
    
    new_user = User(**data)

    db.session.add(new_user)
    db.session.commit()
    
    return jsonify(new_user.to_dict()),201