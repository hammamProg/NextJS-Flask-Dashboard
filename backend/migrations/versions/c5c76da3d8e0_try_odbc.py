"""try odbc

Revision ID: c5c76da3d8e0
Revises: 91c8535972e8
Create Date: 2024-10-29 20:22:02.920734

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c5c76da3d8e0'
down_revision = '91c8535972e8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('User',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('location', sa.String(length=120), nullable=True),
    sa.Column('phone', sa.String(length=14), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('User')
    # ### end Alembic commands ###
