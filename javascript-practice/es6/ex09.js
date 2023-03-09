/**
 * Parenthesis-less function & Template Literal
 */

const f = function(s, ...v) {
    // console.log(typeof(s), s instanceof Array, s.length);
    console.log(s, v);
    return function(props){
        return '<div></div>'
    }
}

const StyledDiv = div`
    color: ${(props)=>{props.color ? props.color : '#111'}}
    font-size:2 0px;
    font-weight: bold;
`;

f`hello world`;