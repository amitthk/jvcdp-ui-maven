FROM openjdk:8-jdk-alpine

ARG RELEASE_VERSION=0.0.1-SNAPSHOT
ARG API_NAME=jvcdp-ui-maven
ARG SPRING_PROFILES_ACTIVE=dev
ARG APP_BASE_DIR=/opt/apps
ENV APP_BASE_DIR $APP_BASE_DIR
ENV SPRING_PROFILES_ACTIVE=${SPRING_PROFILES_ACTIVE}
ENV API_FULL_NAME ${API_NAME}-${RELEASE_VERSION}

ADD ./target/${API_FULL_NAME}.jar $APP_BASE_DIR/
COPY docker-entrypoint.sh $APP_BASE_DIR/
RUN echo "java -jar -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} $APP_BASE_DIR/${API_FULL_NAME}.jar" > $APP_BASE_DIR/run && \
    chmod -R 755 $APP_BASE_DIR

EXPOSE 8080 8081
WORKDIR $APP_BASE_DIR
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["./run"]