from app import db

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=True)
    phone = db.Column(db.String(14), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=True)
    rating = db.Column(db.Integer, unique=False, nullable=True)
    
    def __init__(self, name, location, phone, email, description, rating):
        self.name = name
        self.location = location
        self.phone = phone
        self.email = email
        self.description = description
        self.rating = rating
        
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            'phone': self.phone,
            'email': self.email,
            'description': self.description,
            'rating': self.rating
        }
