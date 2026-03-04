from flask import Flask, render_template, request
import mysql.connector
import os
from dotenv import load_dotenv


load_dotenv()
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/add_student',methods=['POST'])
def add_student():
    name=request.form['Name']
    surname = request.form['Surname']
    exam_number= request.form['Exam_number']
    date_ = request.form['Date']
    
    connection = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
    
    
    cursor=connection.cursor()
    sql = """INSERT INTO STUDENTS
             (Name, Surname, Exam_Number, Date_Collected)
             VALUES (%s, %s, %s, %s)"""
    values=( name,surname,exam_number,date_)
    cursor.execute(sql,values)
    connection.commit()
    cursor.close()
    connection.close()
    
    return "Student Added Successfully To The CLYDESDALE DATABASE"

if __name__ == "__main__":
    app.run(debug=True)
