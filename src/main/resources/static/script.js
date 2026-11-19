'use strict';
const bank=window.JAVA_BANK||{};
const $=id=>document.getElementById(id);
const names=Object.keys(bank);

function numericalVariants(topic){
    const variants = [];
    const rand = (lo,hi) => lo+Math.floor(Math.random() * (hi-lo+1));
    const signed = n => n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`;
    for (let i = 0; i < 25; i++) {
        const a = rand(2, 12), b = rand(1, 9), c = rand(1, 8);
        if (topic === 'Variables/Types') {
            const names = ['score', 'total', 'count', 'level', 'points'];
            const varNames = names[rand(0, names.length - 1)];
            const decimal = `${a}.${b * 10}`;
            const phrase = ['Hello World!', 'Goodbye.', 'Six Seven?', 'Oh hello buddy'];
            const ranPhrase = phrase[rand(0, phrase.length - 1)];
            const character = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
            const ranCharacter = character[rand(0, character.length - 1)];

            variants.push({
                topic,
                type: "Generated Declaration",
                q: `Declare a variable of type int called ${varNames} and set it equal to ${a * b}.`,
                a: `int ${varNames} = ${a * b};`
            });
            variants.push({
                topic,
                type: "Generated Declaration",
                q: `Declare a variable of type double called ${varNames} and set it equal to ${decimal}.`,
                a: `double ${varNames} = ${decimal};`
            });
            variants.push({
                topic,
                type: "Boolean Variables",
                q: `Declare a boolean variable called ${varNames} and set it equal to true.`,
                a: `boolean ${varNames} = true;`
            });
            variants.push({
                topic,
                type: "Boolean Variables",
                q: `Declare a boolean variable called ${varNames} and set it equal to false.`,
                a: `boolean ${varNames} = false;`
            });
            variants.push({
                topic,
                type: "Syntax",
                q: `What is missing from the following declaration: int ${varNames} = ${a}`,
                a: `;`
            });
            variants.push({
                topic,
                type: "String Declaration",
                q: `Declare a variable of type String called ${varNames} and set it equal to "${ranPhrase}".`,
                a: `String ${varNames} = "${ranPhrase}";`
            });
            variants.push({
                topic,
                type: "Type",
                q: `The value '${ranCharacter}' should be declared as what data type?`,
                a: `char`
            });
            variants.push({
                topic,
                type: "Type",
                q: `The value "${ranPhrase}" should be declared as what data type?`,
                a: `String`
            });
        }else if (topic === 'Conditionals') {
            const x = rand(1, 100);
            const y = rand(1, 100);
            const z = rand(1, 200);
            const val = rand(1, 20);
            const words = ["Shelby", "Katie", "Sash", "Kat", "Astra", "Nina", "Gat", "Cielo", "Anastassia", "Camryn"];
            const pick = words[rand(0, words.length - 1)];
            const pick2 = words[rand(0, words.length - 1)];

            variants.push({
                topic,
                type: "If Statements",
                q: `if (${val} > 10)\n\tSystem.out.print("Value is greater than 10");\nelse\n\tSystem.out.print("Value is less than or equal to 10");\nWhat is the output?`,
                a: val > 10 ? "Value is greater than 10" : "Value is less than or equal to 10"
            });
            let yAfter = y;
            if (y >= x) yAfter = z;
            variants.push({
                topic,
                type: "If Statements",
                q: `What is the output of the following statement? Assume x = ${x}, y = ${y}, z = ${z}.\nif (y >= x)\n\ty = z;\nSystem.out.print(x + " " + y + " " + z);\nWhat is the output?`,
                a: `${x} ${yAfter} ${z}`
            });
            let ans = "nothing";
            if (a < 2) ans = "fun";
            else if (a < 4) ans = "jump";
            else if (a < 8) ans = "three";
            variants.push({
                topic,
                type: "Else-if",
                q: `int b = ${a};\nif (b < 2)\n\tSystem.out.println("fun");\nelse if (b < 4)\n\tSystem.out.println("jump");\nelse if (b < 8)\n\tSystem.out.println("three");\nWhat is the output? (Type "nothing" if nothing prints)`,
                a: ans
            });
            let nestedAns = "nothing";
            if (z < 100) {
                if (z < 50)
                    nestedAns = "low";
                else if (z === 50)
                    nestedAns = "mid";
                else if (z > 50)
                    nestedAns = "high";
            } else if (z >= 100) {
                nestedAns = "100 or greater";
            }
            variants.push({
                topic,
                type: "Nested If",
                q: `int z = ${z};\nString ans = "";\nif (z < 100) {\n\tif (z < 50)\n\t\tans = "low";\n\telse if (z == 50)\n\t\tans = "mid";\n\telse if (z > 50)\n\t\tans = "high";\n} else if (z >= 100)\n\tans = "100 or greater";\nSystem.out.println(ans);\nWhat is the output?`,
                a: nestedAns
            });
            variants.push({
                topic,
                type: "Logical Operators",
                q: `int c = ${a};\nint d = ${b};\nif(c > 7 && d > 7)\n\tSystem.out.println("both numbers are > 7");\nelse\n\tSystem.out.print("both numbers are not > 7");\nWhat is the output?`,
                a: (a > 7 && b > 7) ? "both numbers are > 7" : "both numbers are not > 7"
            });
            variants.push({
                topic,
                type: "If-Else Tracing",
                q: `int x = ${x}, y = ${y}, z = 1;\nif(x < y)\n\tz = ${a * 2};\nelse\n\tz = ${b * 2};\nSystem.out.println(z);\nWhat is the output?`,
                a: String(x < y ? a * 2 : b * 2)
            });
            variants.push({
                topic,
                type: "String Conditionals",
                q: `String name = "${pick}";\nif (name.equals("${pick2}"))\n\tSystem.out.println("Yes");\nelse\n\tSystem.out.println("No");\nWhat is the output?`,
                a: pick2 === `${pick}` ? "Yes" : "No"
            });
            variants.push({
                topic,
                type: "Modulo Conditionals",
                q: `int num = ${a};\nif (num % 2 == 0)\n\tSystem.out.println("Even");\nelse\n\tSystem.out.println("Odd");\nWhat is the output?`,
                a: a % 2 === 0 ? "Even" : "Odd"
            });
        }else if (topic === 'Loops') {
            const add = (type, q, a) => variants.push({ topic, type, q, a: String(a) });
            let seq = [], temp = a;

            do { seq.push(temp++); } while (temp < b);
            add("Do-While Output",
                `int count = ${a};\ndo {\n\tSystem.out.print(count + " ");\n\tcount++;\n} while (count < ${b});\nWhat is the output?`,
                seq.join(" ")
            );

            seq = [];
            for (let k = 1; k <= c; k++) seq.push(k);
            add("While Loop Output",
                `int count = 0;\nwhile (count < ${c}) {\n\tcount++;\n\tSystem.out.print(count + " ");\n}\nWhat is the output?`,
                seq.join(" ")
            );
            seq = [];
            for (let k = 2; k <= b + 3; k++) seq.push(k);
            add("While Loop Output",
                `int num = 1;\nwhile (num < ${b + 3}) {\n\tnum++;\n\tSystem.out.print(num + " ");\n}\nSystem.out.print("Done");\nWhat is the output?`,
                `${seq.join(" ")} Done`
            );
            let count = 0;
            temp = 2;
            while (temp <= a * 8) { temp *= 2; count++; }
            add("Loop Iterations",
                `When the following code is executed, how many iterations of the loop will be performed?\nint count = 0;\nint number = 2;\nboolean done = false;\nwhile (!done) {\n\tnumber = number * 2;\n\tif (number > ${a * 8})\n\t\tdone = true;\n\tcount++;\n}`,
                count
            );
            temp = 2;
            while (temp <= a * 4) temp *= 2;
            add("While Loop Trace",
                `int x = 2;\nwhile (x <= ${a * 4}) {\n\tx = 2 * x;\n}\nSystem.out.println(x);\nWhat is the output?`,
                temp
            );
            add("While Loop Output",
                `int count = 0;\nwhile (count < ${c}) {\n\tSystem.out.print("Hello");\n\tcount++;\n}\nWhat is the output?`,
                "Hello".repeat(c)
            );
            seq = [];
            const step = (b % 3) + 2;
            for (let k = 0; k <= a * 2; k += step) seq.push(k);
            add("For Loop Output",
                `for (int i = 0; i <= ${a * 2}; i += ${step}) {\n\tSystem.out.print(i + " ");\n}\nWhat is the output?`,
                seq.join(" ")
            );
            const n = c + 2;
            add("Accumulator Loop",
                `int sum = 0;\nfor (int i = 1; i <= ${n}; i++) {\n\tsum += i;\n}\nSystem.out.println(sum);\nWhat is the output?`,
                (n * (n + 1)) / 2
            );
        }else if(topic === 'Arrays'){
            const arr = Array.from({ length: c + 4 }, () => rand(1, 99));
            const idx = rand(0, arr.length - 1);
            const types = [
                ["Cats", "myPets"], ["String", "words"], ["int", "scores"], ["double", "prices"], ["Dog", "puppies"]];
            const [dataType, arrName] = types[rand(0, types.length - 1)];
            variants.push({
                topic,
                type: "Creating an array",
                q: `Create an array of ${a} ${dataType} named ${arrName}.`,
                a: `${dataType}[] ${arrName} = new ${dataType}[${a}];`
            });
            variants.push({
                topic,
                type: "Array Indexing",
                q: `int[] vals = {${arr.join(", ")}};\nSystem.out.println(vals[${idx}]);\nWhat is the output?`,
                a: String(arr[idx])
            });
            variants.push({
                topic,
                type: "Array Length",
                q: `int[] vals = {${arr.join(", ")}};\nSystem.out.println(vals.length);\nWhat is the output?`,
                a: String(arr.length)
            });
            const ordinals = ["first", "second", "third", "fourth", "fifth"];
            const pos = rand(0, ordinals.length - 1);
            variants.push({
                topic,
                type: "Array Code",
                q: `Write a statement that displays the value stored in the ${ordinals[pos]} position of the array scores.`,
                a: `System.out.println(scores[${pos}]);`
            });
            const rows = (a % 4) + 3;
            const cols = (b % 5) + 4;
            const r1 = rand(0, rows - 1), c1 = rand(0, cols - 1);
            const r2 = rand(0, rows - 1), c2 = rand(0, cols - 1);
            const cell = (r, col) => r * col + Math.floor(col / 2) + r * (col + 1);
            variants.push({
                topic,
                type: "2D Array Output",
                q: `int[][] matrix = new int[${rows}][${cols}];\nfor (int row = 0; row < matrix.length; row++) {\n\tfor (int column = 0; column < matrix[row].length; column++) {\n\t\tmatrix[row][column] = row * column + column / 2 + row * (column + 1);\n\t}\n}\nint val = matrix[${r1}][${c1}] + matrix[${r2}][${c2}];\nSystem.out.print(val);\nWhat is the output?`,
                a: String(cell(r1, c1) + cell(r2, c2))
            });
            variants.push({
                topic,
                type: "Array Last Element",
                q: `int[] vals = {${arr.join(", ")}};\nSystem.out.println(vals[vals.length - 1]);\nWhat is the output?`,
                a: String(arr[arr.length - 1])
            });
            const newVal = a * 10;
            variants.push({
                topic,
                type: "Modifying an Array",
                q: `int[] vals = {${arr.join(", ")}};\nvals[${idx}] = ${newVal};\nSystem.out.println(vals[${idx}]);\nWhat is the output?`,
                a: String(newVal)
            });
            const sumArr = arr.slice(0, 4);
            const total = sumArr.reduce((acc, n) => acc + n, 0);
            variants.push({
                topic,
                type: "Array Loop Sum",
                q: `int[] nums = {${sumArr.join(", ")}};\nint sum = 0;\nfor (int n : nums) {\n\tsum += n;\n}\nSystem.out.println(sum);\nWhat is the output?`,
                a: String(total)
            });
        }
    }
    return variants;
}
let current=[], selectedTitle='', selectedDuration=60, selectedPoints=5, selectedTopic='ALL';
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    return a;}
function activate(tab){document.querySelectorAll('.tab').forEach(el=>{const yes=el.dataset.tab===tab;el.classList.toggle('active',yes);
    el.setAttribute('aria-selected',String(yes));});document.querySelectorAll('.tab-panel').forEach(el=>el.classList.toggle('active',el.id===tab));}
document.querySelectorAll('.tab').forEach(el=>el.addEventListener('click',()=>activate(el.dataset.tab)));
$('topic').innerHTML='<option value="ALL">All topics (mixed test)</option>'+names.map((n,i)=>`<option value="${i}">${escapeHtml(n)}</option>`).join('');
$('metric-topics').textContent=names.length;
$('metric-types').textContent=Object.values(bank).reduce((n,rows)=>n+ rows.length,0);
$('topic-grid').innerHTML=names.map((n,i)=>`<button type="button" class="topic-card" data-topic="${i}"><span class="topic-number">${String(i+1).padStart(2,'0')}</span><strong>${escapeHtml(n)}</strong><span>${bank[n].length} question types</span><span class="topic-link">Select topic→</span></button>`).join('');
document.querySelectorAll('.topic-card').forEach(el=>el.addEventListener('click',()=>{$('topic').value=el.dataset.topic;activate('builder');$('topic').focus();}));
$('go-topics').addEventListener('click',()=>activate('topics'));
$('go-preview').addEventListener('click',()=>activate('preview'));
$('preview-key').addEventListener('click',()=>activate('answers'));
$('count').addEventListener('change',()=>{$('metric-questions').textContent=$('count').value;});

function generate(){
    const count=Number($('count').value),
        topicIndex=$('topic').value;
    selectedTopic=$('title').value.trim() || 'Java Programming Assessment';
    let
        pool=(topicIndex==='ALL'?names:[names[Number(topicIndex)]]).flatMap(n=>[...bank[n].map(([type,q,a])=>({topic:n,type,q,a})),...numericalVariants(n)]);
    if(!pool.length){$('status').textContent='No questions available for this topic.';return;}
    current=[];
    while(current.length<count){const round=shuffle([...pool]);current.push(...round.slice(0,count-current.length));}
    if($('shuffle').checked)shuffle(current);
    selectedTitle=$('title').value.trim()||'Calculus Assessment';
    selectedDuration=Math.max(1,Number($('duration').value)||60);
    selectedPoints=Math.max(1,Number($('points').value)||5);
    $('test-heading').textContent=selectedTitle;
    $('test-output').classList.remove('placeholder');
    $('test-output').innerHTML=`<div class="test-meta"><p><strong>Name:</strong>__________________________________ <strong>Date:</strong>_______________</p><p><strong>Topic:</strong>
${escapeHtml(selectedTopic)} &nbsp;
<strong>Duration:</strong> ${selectedDuration} minutes &nbsp; 
<strong>Total:</strong> ${count*selectedPoints} points</p></div>`+current.map((item,i)=>`<article class="question"><div class="question-label">${escapeHtml(item.topic)} ·
${escapeHtml(item.type)}</div><p><strong>${i+1}.</strong>
${escapeHtml(item.q)} <span class="point-label">(${selectedPoints} points)</span>
</p><divclass="student-work"><label for="student-answer-${i}">Your answer / working</label>
<textarea id="student-answer-${i}"class="student-answer" data-index="${i}" rows="3" placeholder="Type your answer and any calculations here..."></textarea>
<div class="student-controls"><button type="button" class="check-answer" data-index="${i}">Check answer</button><button type="button" class="ask-question" data-index="${i}">Explain in chatbot</button></div><div class="answer-feedback" id="feedback-${i}" aria-live="polite"></div></div></article>`).join('');
    $('answer-output').classList.remove('placeholder');
    $('answer-output').innerHTML=`<div class="test-meta"><strong>${escapeHtml(selectedTitle)}</strong><p>${escapeHtml(selectedTopic)} · ${count} questions ·
${count*selectedPoints} points</p></div>`+current.map((item,i)=>`<article class="key-row"><strong>${i+1}.</strong>
${escapeHtml(item.a)}<div class="question-label">${escapeHtml(item.type)}</div></article>`).join('');
    $('chat-question').innerHTML='<option value="">Choose a question(optional)</option>'+current.map((item,i)=>`<option value="${i}">Question ${i+1}:
${escapeHtml(item.q.slice(0,72))}</option>`).join('');
    $('status').textContent=`Test generated successfully:
            ${count} questions. Open Test Preview to review.`;
    activate('preview');
}
$('generate').addEventListener('click',generate);
function printView(which){if(!current.length){alert('Please generate a test first.');activate('builder');return;}activate(which);document.body.dataset.print=which;window.print();}
$('print').addEventListener('click',()=>printView('preview'));
$('keyprint').addEventListener('click',()=>printView('answers'));
window.addEventListener('afterprint',()=>{delete document.body.dataset.print;});
function normalizeAnswer(value) {return String(value).toLowerCase().replace(/\s+/g,'').replace(/[−–]/g,'-').replace(/×/g,'*').replace(/÷/g,'/')
    .replace(/\^/g,'').replace(/²/g,'2').replace(/³/g,'3').replace(/\bplus\b/g,'+c').replace(/\*/g,'');
}
function numericAnswer(value) {
    const s=normalizeAnswer(value);
    if (/^[+-]?\d+(\.\d+)?(\/[+-]?\d+(\.\d+)?)?$/.test(s)) {
        const bits=s.split('/');return Number(bits[0])/(bits.length===2?Number(bits[1]):1);
    }
    return null;
}
function answerMatches(given, expected) {
    const a=normalizeAnswer(given),
        b=normalizeAnswer(expected);
    if (!a) return false;
    if (a===b) return true;
    const x=numericAnswer(given), y=numericAnswer(expected);
    return x!==null && y!==null && Number.isFinite(x) &&
        Number.isFinite(y) && Math.abs(x-y)<1e-8;
}
function explainQuestion(item) {
    const q = item.q;
    const a = item.a;
    const t = item.topic;
    const lines = [];

    // Variable declarations and data types
    if (/declare a variable|declare a boolean|declaring a variable/i.test(q)) {
        const match = a.match(/\b(int|double|float|long|boolean|char|String)\s+(\w+)\s*(?:=\s*(.*?))?;/);

        if (match) {
            const dataType = match[1];
            const variableName = match[2];
            const value = match[3];

            const descriptions = {
                int: "int stores whole numbers.",
                double: "double stores decimal numbers.",
                float: "float stores decimal numbers with single precision.",
                long: "long stores large whole numbers.",
                boolean: "boolean stores true or false.",
                char: "char stores a single character.",
                String: "String stores text."
            };

            lines.push(
                `Step 1: Identify the data type. ${descriptions[dataType]}`,
                `Step 2: Name the variable ${variableName}.`,
                value !== undefined
                    ? `Step 3: Use the assignment operator (=) to assign ${value}.`
                    : "Step 3: No initial value is required.",
                "Step 4: End the Java statement with a semicolon (;)."
            );
        } else {
            lines.push(
                "Step 1: Identify the required data type.",
                "Step 2: Choose the variable name.",
                "Step 3: Assign a value if requested.",
                "Step 4: End the statement with a semicolon."
            );
        }

        // Conditional statements
    } else if (/if statement|if-else|conditional/i.test(q + " " + t)) {
        lines.push(
            "Step 1: Identify the condition that needs to be evaluated.",
            "Step 2: Write an if statement using parentheses around the condition.",
            "Step 3: Place the statements to execute inside curly braces.",
            "Step 4: Add an else block if an alternative action is required."
        );

        // Loops
    } else if (/for loop|while loop|do-while|iteration/i.test(q + " " + t)) {
        lines.push(
            "Step 1: Identify how many times the code should repeat.",
            "Step 2: Choose the appropriate loop: for, while, or do-while.",
            "Step 3: Define the loop condition and update the counter if needed.",
            "Step 4: Check that the loop eventually terminates."
        );

        // Arrays
    } else if (/array|arrays/i.test(q + " " + t)) {
        lines.push(
            "Step 1: Identify the array's data type.",
            "Step 2: Declare or initialize the array using Java syntax.",
            "Step 3: Access elements using their zero-based indices.",
            "Step 4: Verify that each index is within the array bounds."
        );

        // Methods
    } else if (/method|function|return value/i.test(q + " " + t)) {
        lines.push(
            "Step 1: Identify the method's purpose and return type.",
            "Step 2: Define the method name and parameters.",
            "Step 3: Write the statements inside the method body.",
            "Step 4: Return a value if the method is not void."
        );

        // Classes and objects
    } else if (/class|object|constructor/i.test(q + " " + t)) {
        lines.push(
            "Step 1: Identify the class or object being requested.",
            "Step 2: Define the class structure and its fields.",
            "Step 3: Add constructors or methods as required.",
            "Step 4: Check that the Java syntax is valid."
        );

        // General Java questions
    } else {
        lines.push(
            "Step 1: Read the question and identify the Java concept.",
            "Step 2: Determine the syntax or programming rule needed.",
            "Step 3: Apply that rule to construct the solution.",
            "Step 4: Check data types, capitalization, braces, and semicolons."
        );
    }

    return `Question: ${q}

${lines.join('\n')}

Hint: Use these steps to construct your own Java solution.
(Remember to check your syntax, data types, and semicolons.)`;
}
function tutorReply(text, selectedIndex) {
    if (!current.length) return 'Generate a test first so I can use its questions and answer key.';
    const input=text.trim();
    if (!input && selectedIndex===null) return 'Enter a Java programming question or choose a question number.';
    let idx=selectedIndex;
    if (idx===null) {
        const
            number=input.match(/^(?:question\s*|q\s*|#)(\d+)\b/i);
        if (number && Number(number[1])>=1 &&
            Number(number[1])<=current.length) idx=Number(number[1])-1;
        if (idx===null)
            idx=current.findIndex(item=>item.q.toLowerCase()===input.toLowerCase());
        if (idx===-1)
            idx=current.findIndex(item=>input.length>12 &&
                (item.q.toLowerCase().includes(input.toLowerCase()) ||
                    input.toLowerCase().includes(item.q.toLowerCase())));
    }
    if (idx===null || idx<0 || idx>=current.length) return 'I can explain questions from the generated test. Select a question from the menu, enter “Question 1”, or paste its exact question text.';
    return explainQuestion(current[idx]);
}
function appendChat(role, message) {
    const
        node=document.createElement('div');node.className='chat-message '+role;
    node.textContent=message;$('chat-history').appendChild(node);
    $('chat-history').scrollTop=$('chat-history').scrollHeight;
}
function askTutor(index=null) {
    if (index!==null) $('chat-question').value=String(index);
    const raw=$('chat-input').value;
    const indexFromSelect=$('chat-question').value;
    const chosen=index!==null?index:(indexFromSelect===''?null:Number(indexFromSelect));
    appendChat('student',raw.trim()||(chosen!==null?`Please explain question ${chosen+1}.`:'Please explain this question.'));
    appendChat('tutor',tutorReply(raw,chosen));
    $('chat-input').value='';}
$('test-output').addEventListener('click',event=>{
    const check=event.target.closest('.check-answer');
    const ask=event.target.closest('.ask-question');
    if(check){
        const i=Number(check.dataset.index), given=$('student-answer-'+i).value.trim();
        const feedback=$('feedback-'+i);
        feedback.className='answer-feedback'+(!given?'':answerMatches(given,current[i].a)?'correct':'incorrect');
        feedback.textContent=!given?'Please type your answer first.':answerMatches(given,current[i].a)?'Correct answer!':'Not matched to the answer key. Review your work or use the chatbot for guidance. Equivalent symbolic forms may need instructor review.';
    }
    if(ask){const i=Number(ask.dataset.index);$('chat-question').value=String(i);askTutor(i);$('chat-panel').scrollIntoView({behavior:'smooth',block:'start'});}
});
$('chat-send').addEventListener('click',()=>askTutor());
$('chat-input').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();askTutor();
}});