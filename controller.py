import kivy
kivy.require('1.0.5')

import threading

from kivy.logger import Logger
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget
import kivy.uix
from kivy.app import App

from time import sleep

from kivy.properties import ObjectProperty, StringProperty, NumericProperty

def DoAThing(status):
    status.text = "Info one"
    sleep(1)
    status.info("Info two")
    sleep(3)
    for x in range(100):
        status.info("Info " + str(x))

class FileSelector(GridLayout):

    file_id = NumericProperty()
    file_name = StringProperty('')

    def select_file(self):
        pass


class OutputRow(GridLayout):
    status = StringProperty()
    outputButton = ObjectProperty()
    statusLabel = ObjectProperty()
    
    def run(self):
        thread = threading.Thread(target=self.start)
        thread.run()

    def start(self):
        
        sum = 0

        for x in range(100):

            self.status = str(x)
            self.statusLabel.text = ("Info " + str(x))
            sleep(0.01)


class MyWidget(BoxLayout):
    pass

class ControllerApp(App):

    def build(self):
        return MyWidget()


if __name__ == '__main__':
    ControllerApp().run()