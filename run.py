from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def parse_request():
    ## return the index.html page when the user access the root directory 
    return app.send_static_file('index.html')

@app.route('/data', methods=['GET'])
def parse_request2():
    df = pd.read_csv('./static/csv/censo.csv')
    df = df.to_json(orient='records')
    return df

def main():
    app.run(host= '')
    
if __name__ == '__main__':
    main()