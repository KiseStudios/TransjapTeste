from flask import Flask, render

app = Flask(__name__)

@app.route('/')
def home():
    return render('index.html')

@app.route('/equipamentos')
def equipamentos():
    return render('equipamentos.html')

# --- NOVA ROTA: SERVIÇOS/OBRAS ---
@app.route('/servicos')
def servicos():
    return render('servicos.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)