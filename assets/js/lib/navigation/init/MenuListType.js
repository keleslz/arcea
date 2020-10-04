/**
 * Navigation/Menu/SELECT_LIST balise Type initialization
 */
export class MenuListType
{
    constructor()
    {   
        this.nav = document.querySelector('#nav-sidebar');
        this.container();
        this.apply();
    }

    /**
     * Option container in '.edit-list'
     */
    container()
    {   
        let ul = document.createElement('ul');
        let liType = document.createElement('li');
        let select = document.createElement('select');

        ul.id = 'edit-list';
        liType.id = 'edit-type'; 

        select.setAttribute('name', 'type');
        select.id ='select-type';
        select.placeholder = 'Element HTML';

        this.nav.appendChild(ul);
        ul.appendChild(liType);
        liType.appendChild(select);
    }

    /**
     * Apply struct
     */
    apply()
    {
        let options = this.list();
        
        this.insert(options.titles, 'Titre');
        this.insert(options.blocks, 'Block');
        this.insert(options.others, 'Inline');
        this.insert(options.containers, 'Box');
    }

    /**
     * Create an option element with empty value
     * @param {Array} options an array contains html element
     */
    insert(options, headTranslate)
    {   
        options.forEach( option => {
            
            this.createOption(option, headTranslate);
        });
    }

    /**
     * Create HTML option element. if an index equal 'empty string' so add '.head' class
     * @param {String} name type name
     */
    createOption(name, headTranslate)
    {
        let option = document.createElement('option');
        document.querySelector('#select-type').appendChild(option);
        option.value = name;

        if(name === '')
        {   
            option.classList.add('head');
            option.id = headTranslate;
            option.innerHTML = headTranslate;
                
        }else{
            option.id = option.value;
            option.innerHTML = name;
        }
    }

    /**
     * Report all elements type available. The first index of all each array
     * are header-list place. if a key was added , add an this.insert() in this.loop()
     */
    list()
    {
        return {
            titles : ['','h1','h2','h3','h4','h5','h6'],
            blocks : ['','footer','header','nav','img','address','article','blockquote','details','dialog','dd','div','fieldset','dt','ul','ol','li','main','p','pre','section','table'],
            others : ['','span','em','strong','a','q','small','textarea','label','input','select'],
            containers : ['', 'box-100', 'box-75', 'box-50' ]
            /* Add key */
        } 
    }
}