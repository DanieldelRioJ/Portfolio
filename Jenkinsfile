pipeline {
    agent any
    tools {
        nodejs '16'
     }
    environment {
        DOCKER_MACHINE = 'IP DOCKER_MACHINE '
        DOCKER_TAG = 'dev'
        DOCKERHUB_CREDENTIALS=credentials('NAME OF DOCKER HUB CREDENTIALS IN JENKINS')
        DOCKER_REPO = 'NAME OF DOCKER REPO'
    }

    post {
        always {
            deleteDir()
            sh "docker image prune -af "
        }
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }

    stages {

        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Install') {
            steps {
                nodejs(nodeJSInstallationName: '16') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: '16') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build image and push with build-id') {
            steps {
                sh 'docker build -t ${DOCKER_REPO}:${BUILD_ID} .'
                sh 'docker push ${DOCKER_REPO}:${BUILD_ID}'
            }
        }

        stage('Tag and push dev image') {
            when {
                anyOf {
                        branch 'develop'
                        branch 'master'
                        branch 'main'
                }
            }
            steps {
                sh 'docker tag ${DOCKER_REPO}:${BUILD_ID} ${DOCKER_REPO}:dev'
                sh 'docker push ${DOCKER_REPO}:dev'
            }
        }

        stage("Desploy") {
            when {
                anyOf {
                        branch 'develop'
                        branch 'master'
                        branch 'main'
                }
            }
            steps {
                sh 'DEPENDS ON DEPLOY STRATEGY'
            }
        }
    }
}
