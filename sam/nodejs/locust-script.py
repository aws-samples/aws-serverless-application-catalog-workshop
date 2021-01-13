from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 3)

    @task(1)
    def index(self):
        self.client.get("items/")
        #self.client.get("items/1/")