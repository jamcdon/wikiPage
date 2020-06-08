var app = new Vue({
	el:'#wikiContent',
	data:{
		entries:[
			{
				name:'Flask',
				paras:[
					'Simple Python-based web application framework based off of Werkzeug and Jinja2 and is supported on python 2.7, python 3.5+ and PyPy.',
					'Flask framework provides URL routing, Input form handling, RestAPI handling, database connections, and templating with HTML and JSON',
					'Package design optimizes code for application needs. Requires you to install all needed packages and reducing bloat of application for snappy user experience.',
					'Flask supports running directly from the .py application and via virtual environments.'
			],
				sources:[
					{
						link:'https://www.fullstackpython.com/flask.html',
						name:'FullStackPython'
					},
					{
						link:'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world',
						name:'Flask Mega-Tutorial'
					},
					{
						link:'https://pypi.org/project/Flask/',
						name:'PyPi'
					}
			],
				code:[
					{
						code:`from flask import Flask\napp = Flask(__name__)\n\n\n@app.route('/')\ndef hello_world():\n    return 'Hello, World!'\n\nif __name__ == '__main__':\n    app.run()`,
						name:'"Hello, world!"'
					}
			]
			},
			{
				name:'SQLAlchemy',
				paras:[
					'Python library used for database pointers and is supported on python 2.5+',
					'SQLAlchemy uses an object-relational mapper(ORM) to manipulate data from a database schema to an object oriented design, the most popular programming language design, including python.',
					'SQLAlchemy also uses a Core that can be used in palce of an ORM, doing database abstraction natively.'
			],
				sources:[
					{
						link:'https://www.sqlalchemy.org/',
						name:'SQLAlchemy'
					},
					{
						link:'https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_quick_guide.htm',
						name:'TutorialsPoint'
					},
					{
						link:'https://pypi.org/project/SQLAlchemy/',
						name:'PyPi'
					}
			],
				code:[
					{
						code:`from sqlalchemy import create_engine\n\nengine = create_engine('sqlite://')\n\nfrom sqlalchemy import Column, Integer, Text, MetaData, Table\n\nmetadata = MetaData()\nmessages = Table(\n   'messages', metadata,\n   Column('id', Integer, primary_key=True),\n   Column('message', Text),\n)\n\nmessages.create(bind=engine)\n\ninsert_message = messages.insert().values(message='Hello, World!')\nengine.execute(insert_message)\n\nfrom sqlalchemy import select\nstmt = select([messages.c.message])\nmessage, = engine.execute(stmt).fetchone()\nprint(message)
`,
						name:'"Hello, World!"'
					}
					
			]
			},
			{
				name:'FastAPI',
				paras:[
					'Python framework used to create APIs (Application programming interface). FastAPI is based on Starlette and Pydantic and requires Python 3.6+.',
					' To use FastAPI you need both pip packages of FastAPI and Uvicorn.',
					'The FastAPI package is used directly inside the .py program such as Flask, while Uvicorn is used to run the application.'
			],
				sources:[
					{
						link:'https://fastapi.tiangolo.com/',
						name:'Tiangolo'
					},
					{
						link:'https://pypi.org/project/fastapi/',
						name:'PyPi'
					}
			],
				code:[
					{
						code:`from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\nasync def root():\n    return{"message":"Hello World"}`,
						name:'"Hello, world!"'
					},
					{
						code:`uvicorn [appName]:app --reload`,
						name:'Running a FastAPI program'
					}
			]
			},
			{
				name:'Pip',
				paras:[
					'Pip is a package manager used for python dependencies. Pip is installed on python 3.4+ by default.',
					'Pip packages can be installed to the machine globally, user, or a virtual environment depending on use case. It is not recommended to install pip packages globally.'
			],
				sources:[
					{
						link:'https://www.w3schools.com/python/python_pip.asp',
						name:'W3Schools'
					},
					{
						link:'https://pypi.org/project/pip/',
						name:'PyPi'
					}
			],
				code:[
					{
						code:`pip install --user [package]`,
						name:'Install pip packages - UNIX'
					},
					{
						code:`py -m venv env\nenv\Scripts\activate\npip install flask`,
						name:'Install pip packages - Windows/Virtual Environment'
					}
			]
			},
			{
				name:'Uvicorn',
				paras:[
					'Uvicorn is a python compatible ASGI (Asynchronous Server Gateway Interface) server. With dependendencies from uvloop and httptools, Uvicorn requires Python 3.6+.',
					'Uvicorn can be used with programs such as FastAPI or standalone.',
					'Useful commands for this program inclused --host, allowing you to specify and IPv4, as well as --port to specify port. --reload enables automatic reloading of the program.'
			],
				sources:[
					{
						link:'https://www.uvicorn.org/',
						name:'Uvicorn.org'
					},
					{
						link:'https://pypi.org/project/uvicorn/',
						name:'PyPi'
					}
			],
				code:[
					{
						code:`async def app(scope, receive, send):\n    assert scope['type'] == 'http'\n    await send({\n        'type': 'http.response.start',\n        'status': 200,\n        'headers': [\n            [b'content-type', b'text/plain'],\n        ]\n    })\n    await send({\n        'type': 'http.response.body',\n        'body': b'Hello, world!',\n    })`,
						name:'"Hello, world!"'
					},
					{
						code:`uvicorn [appName]:app --reload`,
						name:'Running a Uvicorn program'
					}
			]
			}
		]
	}
})