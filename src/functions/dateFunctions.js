import { min, max, isBefore } from 'date-fns'

const intervalIntersection = ( intervals ) => {
    const intersection =intervals.reduce((intersection, val)=>{
        return {
            start: max( [intersection.start, val.start]),
            end: min( [intersection.end, val.end])
        }
    }, intervals[0]);
    if( isBefore(intersection.start, intersection.end) ){
        return intersection;
    }else{
        return null;
    }
}

export { intervalIntersection };