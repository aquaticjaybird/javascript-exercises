const fibonacci = function(memberNum) {
    let preMember = 1;
    let curMember = 1;
    if (memberNum == 0) return 0;
    if (memberNum == 1) return preMember;
    if (memberNum < 0) return "OOPS";
    for (let i = 2; i < memberNum; i++) {
        const nextMember = curMember + preMember;
        preMember = curMember;
        curMember = nextMember;
    }
    return curMember;
};

// Do not edit below this line
module.exports = fibonacci;
