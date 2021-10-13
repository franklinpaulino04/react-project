export const reviewBudget = (budget: number, restant: number) : string => {

    let $class: string;

    if((budget / 4) > restant){
        $class = 'alert alert-danger';
    }else if((budget / 2) > restant){
        $class = 'alert alert-warning';
    }else{
        $class = 'alert alert-success';
    }

    return $class;
}