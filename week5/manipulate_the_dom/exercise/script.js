        let head = document.getElementById ("head")
        let para = document.getElementById ("para")
        let link = document.getElementById ("link")
        
        
        // ---------loop with iterations -----
        for (let i=0 ; i<2; i++){
            // console.log (i)
            let node = document.createTextNode(i);
            head.appendChild(node) + "<br>";
        }

        for (let i=0 ; i<4 ; i++){
            let para2 = document.createElement("p")
            let text = document.createTextNode(i)
            para2.appendChild(text)
            para.insertBefore(para2,para.children[0]);
        }

        for (let i=0; i<7; i++){
            let a = document.querySelector("a")
            let newNode = document.createElement("a")
            let text = document.createTextNode(i)
            newNode.appendChild(text)
            a.replaceWith(newNode)
        }

