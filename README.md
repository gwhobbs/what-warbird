# What Warbird

Web app powered by fastai and deployed on Render that classifies warbird images with about 85% accuracy. 

Currently supports:
* P-51 Mustang
* P-38 Lightning
* P-47 Thunderbolt
* Me109
* Fw190
* Spitfire

Check out the live app at https://whatwarbird.com!

You can test your changes locally by installing Docker and using the following commands:

```
docker build -t what-warbird .
docker run --rm -it -p 5000:5000 what-warbird
```

The guide for production deployment to Render is at https://course.fast.ai/deployment_render.html.

Please use [Render's fast.ai forum thread](https://forums.fast.ai/t/deployment-platform-render/33953) for questions and support.
