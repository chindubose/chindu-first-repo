pipeline {
    tools {
        nodejs 'nodejs'
    }
    agent any
    
    environment {
        registry = "683489048777.dkr.ecr.us-east-2.amazonaws.com/ecr-test-repo"
    }

    stages {
        
        stage('Cloning Repo') {
            steps {
                git branch: 'branch_for_api', url: 'https://github.com/chindubose/chindu-first-repo'
            }
        }
        
        stage('Building the project') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-repo-chindu-api .'
            }
        }
        
        stage('Tag ECR Image') {
            steps {
                sh 'docker tag docker-repo-chindu-api:latest 683489048777.dkr.ecr.us-east-2.amazonaws.com/ecr-test-repo:$BUILD_NUMBER'
            }
        }
        
        stage('Pushing to ECR') {
            steps{  
                script {
                        sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 683489048777.dkr.ecr.us-east-2.amazonaws.com/ecr-test-repo'
                        sh 'docker push 683489048777.dkr.ecr.us-east-2.amazonaws.com/ecr-test-repo:$BUILD_NUMBER'
                }
            }
        }

    }
}
