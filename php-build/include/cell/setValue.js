/**
 * set cell value and sync it with the bound element, and trigger recalculation on all cell depend to it
 * @param {mixed}   value       value to be inserted into the cell
 * @param {bool}    render      render computed value of it's dependant or not
 */
cell.fx.setValue = function(value, render){

    //console.log('cell[#'+this.sheet.elementId+'!'+this.address+'] : setting value to be : '+value);

    if(this.format && typeof(numeral) != 'undefined' && $.trim(value) !== ''){
        this.value = numeral().unformat(value+'');

        if(this.format.indexOf('%') > -1 && (value+'').indexOf('%') == -1){
            this.value = this.value/100;
        }
    }else{
        this.value = ($.isNumeric(value)) ? parseFloat(value) : value;
    }

    if(this.sheet.affectedCell.indexOf(this.address) == -1){
        this.sheet.affectedCell.push(this.address);
    }

    /* set value mean set value, no other thing should be done */
    return this;
};