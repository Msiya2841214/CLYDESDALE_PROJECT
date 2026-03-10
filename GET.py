from flask import Flask, render_template, request
import mysql.connector
import os
from dotenv import load_dotenv


load_dotenv()
app = Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html" ,students=[])

@app.route('/search_students',methods=['GET'])
def search_students():
    name=request.args.get('Name' ,'')
    
    connection = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
    
    
    cursor = connection.cursor(dictionary=True)
    sql = "SELECT * FROM STUDENTS WHERE Name LIKE %s"
    print(name)
    cursor.execute(sql, (f"%{name}%",))
    students = cursor.fetchall()
   
    cursor.close()
    connection.close()
    
    return render_template("index.html" ,students=students)
   

if __name__ == "__main__":
    app.run(debug=True)
