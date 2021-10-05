export const reviewBudget = (budget, restant) => {

    let $class;

    if((budget / 4) > restant){
        $class = 'alert alert-danger';
    }else if((budget / 2) > restant){
        $class = 'alert alert-warning';
    }else{
        $class = 'alert alert-success';
    }

    return $class;
}