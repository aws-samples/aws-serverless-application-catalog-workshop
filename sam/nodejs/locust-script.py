from locust import TaskSet, task, HttpLocust, between

class ConverterTasks(TaskSet):
    @task
    def day_to_hour(self):
        self.client.get('items/')
# Receives the URL from CloudFormation output variable containing "/" as last character so omit it as first char 

# Add tests to more resources as you require
#    @task
#    def day_to_minute(self):
#        self.client.get('items/1')

class ApiUser(HttpLocust):
    task_set = ConverterTasks
    wait_time = between(1,3)