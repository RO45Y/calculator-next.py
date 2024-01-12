# This file has been modified by the Nextpy Team in 2023 using AI tools and automation scripts. 
# We have rigorously tested these modifications to ensure reliability and performance. Based on successful test results, we are confident in the quality and stability of these changes.

import nextpy as xt



 

# Construct the filename to display 
from xtconfig import config
filename = f"{config.app_name}/{config.app_name}.py"

class mState(xt.State):
    c: str = "0"
    f: float = 0
    p: float = 0

    def myclick(self, num: str):
        self.c += num

    def clear(self):
        self.c = self.c[:-1]

    def add(self):
        self.p = float(self.c)
        self.c = "0"
        self.f = 1

    def mul(self):
        self.p = float(self.c)
        self.c = "0"
        self.f = 2

    def sub(self):
        self.p = float(self.c)
        self.c = "0"
        self.f = 3

    def div(self):
        self.p = float(self.c)
        self.c = "0"
        self.f = 4

    def eq(self):
        r: float = float(self.c)
        if self.f == 1:
            self.c = "0" + str(self.p + r)
            self.f = 0
        elif self.f == 2:
            self.c = "0" + str(self.p * r)
            self.f = 0
        elif self.f == 3:
            self.c = "0" + str(self.p - r)
            self.f = 0
        elif self.f == 4:
            self.c = "0" + str(self.p / r)
            self.f = 0
        else:
            pass

# define index page. Frontend Pages are just functions that return a frontend components
def index() -> xt.Component:
    return xt.stack(
        xt.vstack(
            xt.form(
             xt.image(src="/logo_darkmode.svg", width="150px"),
             xt.stack(xt.input(value=mState.c[1:],placeholder="0",type="text",class_name="display", )
             ),
             xt.hstack(
                 xt.input(type_="button",value="AC",on_click=mState.set_c("0"),_hover={"background": "lightgrey"},class_name="opr"),
                 xt.input(type_="button",value="DE", on_click=mState.clear(),_hover={"background": "lightgrey"},class_name="opr"),
                 xt.input(type_="button",value=".", on_click=mState.myclick("."),_hover={"background": "lightgrey"},class_name="opr"),
                 xt.input(type_="button",value="/",on_click=mState.div(),_hover={"background": "lightgrey"},class_name="opr")
             ),
             xt.hstack(
                 xt.input(type_="button",value="7", on_click=mState.myclick("7"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="8", on_click=mState.myclick("8"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="9", on_click=mState.myclick("9"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="*", on_click=mState.mul(),_hover={"background": "lightgrey"},class_name="opr")
             ),
             xt.hstack(
                 xt.input(type_="button",value="4", on_click=mState.myclick("4"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="5", on_click=mState.myclick("5"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="6", on_click=mState.myclick("6"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="-", on_click=mState.sub(),_hover={"background": "lightgrey"},class_name="opr")
             ),
             xt.hstack(
                 xt.input(type_="button",value="1", on_click=mState.myclick("1"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="2", on_click=mState.myclick("2"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="3", on_click=mState.myclick("3"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="+", on_click=mState.add(),_hover={"background": "lightgrey"},class_name="opr")
             ),
             xt.hstack(
                 xt.input(type_="button",value="00", on_click=mState.myclick("00"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="0", on_click=mState.myclick("0"),_hover={"background": "lightgrey"}),
                 xt.input(type_="button",value="=", class_name="equal",on_click=mState.eq(),_hover={"background": "lightgrey"})
             )
         ),class_name="calc"
        ),class_name="cont"
    )

# Global styles defined as a Python dictionary
style = {
    "text_align": "center",  
}


app = xt.App(stylesheets=["style.css"])
app.add_page(index)
