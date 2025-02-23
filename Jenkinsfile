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
                sh 'docker build -t csi402labapprouter .' 
            }
        }
        stage('Testing') {
            steps {
                print "Testing"
            }
        }
    }
}