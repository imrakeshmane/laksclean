
export const fortmatTwoDigit = (value) => {
    const formattedNumber = value > 9 ? value : `0${value}`;
    console.log(formattedNumber);
    return formattedNumber;
}

/**conver exam json to current array of array format. */
export const convertJSON = (examQueObject) => {
    let result = [];
    let newResult = [];
    if (examQueObject) {
        let newArray = [];
        newArray.push(examQueObject); //convert json to array
        result = newArray.map((que) => {
            /** separate array subject wise */
            return Object.values(que.questions).reduce(function (r, o) {
                const k = o.qs_subject_name   // unique `loc` key
                if (r[k] || (r[k] = [])) r[k].push({ ...o });
                return r;
            }, {});
        })
        let newArr = []
        /**convert questions array into current format array of */
        for (let [key, value] of Object.entries(result[0])) {
            const subjectJSON = JSON.parse(value[0].subject)
            let extraKeyArr = [];
            value.map((item, index) => {
                const { q_answer, id, q_explanation, q_question, q_type, subject, options } = item;
                let optionArray = [];
                options.map((opt) => {
                    const label = opt.qo_options['1'];
                    const optObj = { optionValue: opt.id, label, isChcked: false, ...opt };
                    optionArray.push(optObj);
                })
                const obj = {
                    questionId: fortmatTwoDigit(index + 1), questionText: q_question['1'], answer: q_answer, explanation: q_explanation['1'], selectedOption: -1, optionType: q_type, isVisited: 0, rightAnswer: 0, isBookmarked: 0, isChcked: false,
                    isAns: 0, ...item, options: optionArray,
                }
                extraKeyArr.push(obj)
            });
            newArr.push({ subject: key, SubId: subjectJSON.id, quastions: [...extraKeyArr] })
        }
        console.log('my new arr', newArr)
        return newArr;
        // var result = dataset.reduce(function(r, o){
        //     var k = o.locA + o.locB;   // unique `loc` key
        //     if (r[k] || (r[k]=[])) r[k].push({loc:k, time: o.time, value: o.value});
        //     return r;
        // }, {});
    }
}


const replaceTag = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    // return str.replace(/(?:\ r\n|\r|\n)/g, '<br>') //replace \n to br
    // return str.replace(/(?:\\r\\n|\\r|\\n)/g, '') //replace \n\r to null
    // .replace(/\//g, '')
    return str;
}
function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '')
        .replace(/(?:\\r\\n|\\r|\\n)/g, '')
        .replace(/:\s*/g, '.')
        .replace(/["']/g, "")


}