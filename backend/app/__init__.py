from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


db = SQLAlchemy()
app = None

# import the blueprint route to register it
from .routes.user import user_bp

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    
    app.config["SECRET_KEY"]='126c89b4151748539fd322c3f365ffbf'


    # replace the uri with your database uri instead of the sqlite one
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://legistaitest:admin%40123@legistai-test.database.windows.net:1433/legistai-test?driver=ODBC+Driver+18+for+SQL+Server&Encrypt=yes&TrustServerCertificate=no&Connection+Timeout=30'
    
    db.init_app(app) 
    migrate = Migrate(app, db)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

    
    # register the blueprint
    app.register_blueprint(user_bp)
    
    return app