image: _nothing_
	docker build -t proxy-backend .
	docker tag proxy-backend refractalize/proxy-backend
	docker push refractalize/proxy-backend

_nothing_:
