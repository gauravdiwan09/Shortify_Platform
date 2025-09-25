# Use Java 24 JDK base image
FROM eclipse-temurin:24-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the jar file into the container
COPY target/url-shorterner-sb-0.0.1-SNAPSHOT.jar app.jar

# Expose Spring Boot default port
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
