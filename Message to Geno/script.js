const message = `จดหมายอันที่สองแล้วนะคุณ หนูพัฒนาขึ้นเยอะป่าววววววหวังว่าพี่จะชอบนะ 
หนูไม่รู้ว่าจะคุยกับพี่ได้นานแค่ไหนแต่ดีใจนะที่ได้เจอพี่ ขอบคุณที่เก็บหนูมาเลี้ยงค่ะ 

ถึงแม้พึ่งจะได้ไปเที่ยวกันแค่สองครั้งแต่ทุกครั้งที่ได้ไปก็มีความสุขตลอดจนลืมไปเลยว่าเคยโกรธพี่ ^-^ 

หนูจะอยู่กับพี่ตรงนี้แหละ สู้ๆกับการทำงานนะคะคนเก่งของหนูอยู่กับหนูไปนานๆจนเป็นแฟนหนูเลยนะ`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}