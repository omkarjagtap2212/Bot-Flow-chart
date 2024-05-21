project hoisted link :- https://chat-flow-chart.vercel.app/

for start project locally

1. git clone  git@github.com:omkarjagtap2212/Bot-Flow-chart.git
2. cd  Bot-Flow-chart
3. npm install
4. yarn dev



# Overview:

We’ll build a simple Chatbot flow builder using React and try to make the code extensible to easily add new features. 

A chatbot flow is built by connecting multiple messages together to decide the order of execution.


#**Note →** 

- Use https://reactflow.dev/ for the flow builder.
- You are free to use any other library on top of React Flow.
- You can use either of JavaScript or TypeScript for this Task
- Add comments to explain your code


  # Features:

1. **Text Node** 
    1. Our flow builder currently supports only one type of message (i.e Text Message).
    2. There can be multiple Text Nodes in one flow.
    3. Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel** 
    1. This panel houses all kind of Nodes that our Flow Builder supports.
    2. Right now there is only Message Node, but we’d be adding more types of Nodes in the future so make this section extensible 
3. **Edge**
    1. Connects two Nodes together
4. **Source Handle**
    1. Source of a connecting edge 
    2. Can only have **one edge** originating from a source handle
5. **Target Handle** 
    1. Target of a connecting edge
    2. Can have **more than one edge** connecting to a target handle 
6. **Settings Panel**
  1. Settings Panel will replace the Nodes Panel when a Node is selected
  2. It has a text field to edit text of the selected Text Node

     
 7. **Save Button**
    1. Button to save the flow 
    2. **Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles**

# Submission

1. Deploy a working version on a free hosting service like Heroku, Vercel, etc 
2. Host the code repo on Github and add hosting link from the above step to the readme file 
3. Share the repo link with your resume to [careers@bitespeed.co](mailto:careers@bitespeed.co) with subject “BiteSpeed Frontend Task”
4. **Please fill this form to submit the task -**
     
