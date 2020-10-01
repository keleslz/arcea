/**
 * Navigation/Menu/SELECT_LIST balise Type initialization
 */
export class MenuSelectList
{
    constructor()
    {   
        this.nav = document.querySelector('#nav-sidebar');
        this.container();
        this.loop();
    }

    /**
     * Option container
     */
    container()
    {   
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let select = document.createElement('select');

        select.setAttribute('name', 'type');
        select.id ='select-type';
        select.placeholder = 'Element HTML';

        this.nav.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(select);
    }

      /**
     * Apply struct
     */
    loop()
    {
        let options = this.list();

        this.insert(options.titles, 'Titre');
        this.insert(options.blocks, 'Block');
        this.insert(options.others, 'Inline');
        this.head();
    }

    /**
     * Create an option element with empty value
     * @param {Array} options an array contains html element
     */
    insert(options)
    {   
        options.forEach( option => {
            
            this.createOption(option);
        });
    }

    /**
     * Create HTML option element. if an index equal 'empty string' so add '.head' class
     * @param {String} name type name
     */
    createOption(name)
    {
        let option = document.createElement('option');
        document.querySelector('#select-type').appendChild(option);
        option.value = name;

        if(name === '')
        {   
            option.classList.add('head');
                
        }else{
            option.innerHTML = name;
        }
    }

    /**
     * Insert head name on '.head 'items class on select list 
     */
    head()
    {
        let headsList = document.querySelectorAll('#select-type .head');
        let heads = this.list();
        let i = 0;

        for (const key in heads) {

            if (heads.hasOwnProperty(key)) {

                headsList[i].innerHTML = key.charAt(0).toUpperCase() + key.slice(1);
                i++;
            }
        }
    }

    /**
     * Report all elements type available. The first index of all each array
     * are header-list place
     */
    list()
    {
        return{
            titles : ['','h1','h2','h3','h4','h5','h6'],
            blocks : ['','footer','header','nav','img','address','article','blockquote','details','dialog','dd','div','fieldset','dt','ul','ol','li','main','p','pre','section','table'],
            others : ['','span','em','strong','a','q','small','textarea','label','input','select'],
        } 
    }   
}