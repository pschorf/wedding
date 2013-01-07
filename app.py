import dj_database_url
import os
import psycopg2
from flask import Flask

app = Flask(__name__)

def get_connection_string():
  url = os.environ.get('HEROKU_POSTGRESQL_TEAL_URL')
  parsed = dj_database_url.parse(url)
  return 'dbname={} user={} password={} host={} port={}'.format(parsed['NAME'], parsed['USER'],
      parsed['PASSWORD'], parsed['HOST'], parsed['PORT'])

@app.route('/')
def hello():
  conn = psycopg2.connect(get_connection_string())
  cur = conn.cursor()
  cur.execute('SELECT * from guests')
  return str(cur.fetchall())

if __name__ == '__main__':
  # Bind to PORT if defined, otherwise default to 5000.
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)
