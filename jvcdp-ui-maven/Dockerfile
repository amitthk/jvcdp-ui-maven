FROM openjdk:8-jdk-alpine

ARG API_NAME=blogposts-api
ARG APP_BASE_DIR=/opt/apps
ENV APP_BASE_DIR $APP_BASE_DIR
ENV API_NAME ${API_NAME}

ADD ./target/${API_NAME}.jar $APP_BASE_DIR/
COPY docker-entrypoint.sh $APP_BASE_DIR/
RUN echo "java -jar -Dspring.profiles.active=dev $APP_BASE_DIR/${API_NAME}.jar" > $APP_BASE_DIR/run && \
    chmod -R u+x $APP_BASE_DIR/

EXPOSE 8080 8081
WORKDIR $APP_BASE_DIR
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ./run