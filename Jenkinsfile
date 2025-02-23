pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                print "Clone"
            }
        }
        stage('Build') {
            steps {
                print "Build"
                bat 'docker build -t csi402labapprouter .' 
            }
        }
        stage('StartContainer') {
            steps {
                print "Run Container"
                bat 'docker run -d --name csi402labapprouter -p 50500:3000 csi402labapprouter:latest'
            }
        }
    }
}