const localA = [];
const localB = [];
const localC = [];
const localD = [];

function ins(obj) {
  let auxA = localA.length();
  let auxB = localB.length();
  let auxC = localC.length();
  let auxD = localD.length();

  if ((auxA < auxB && auxA < auxC && auxA, auxD)) {
    if (auxA > 3) {
        console.log("stack is not possible");
    } else {
        localA.push(obj);
        console.log("Add to local A");
    }
  } else if ((auxB < auxA && auxB < auxC && auxB, auxD)) {
    if (auxB > 3) {
        console.log("stack is not possible");
    } else {
        localB.push(obj);
        console.log("Add to local B");
    }
  }
  else if ((auxC < auxA && auxC < auxB && auxC, auxD)) {
    if (auxC > 3) {
        console.log("stack is not possible");
    } else {
        localC.push(obj);
        console.log("Add to local C");
    }
  }
  else{
    if (auxD > 3) {
      console.log("stack is not possible");
    } else {
        localD.push(obj);
      console.log("Add to local D");
    }
  }
}

function remove(index, local){
    if(local === 'A') {
        localA.slice(index,1)
    }
    else if(local === 'B') {
        localB.slice(index,1)
    }
    else if(local === 'C') {
        localC.slice(index,1)

    }
    else{
        localD.slice(index,1)
    }

}

add('Container1');
add('Container2');
add('Container3');
add('Container4');

console.log(localA)

remove(1,'A');

console.log(localA)