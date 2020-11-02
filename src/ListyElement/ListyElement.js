
import Listy from './Listy';

/**
 * ListyElement
 * 
 * @class
 * @classdesc Listy Element makes use of Listy to provide a sortable list.
 */
export default class ListyElement {

    /**
    * @Constructor
    * 
    */
    constructor() {

        this.setupElements();
        this.setupEvents();
        this.setupProperties();

        console.log('Listy Element constructor end');
    }

    /**
    * SetupElements()     Sets up internal elements for this element.
    */
    setupElements() {
        this._mainContainer = document.createElement('div');
        this._mainContainer.className = 'mainContainer';

        // Position Container.
        this._positionContainer = document.createElement('div');
        this._positionContainer.classList.add('positionContainer');

        this._positionContainerInput = document.createElement('input');
        this._positionContainerInput.classList.add('positionContainerInput');
        this._positionContainerInput.value = 0;

        this._positionContainerLabel = document.createElement('p');
        this._positionContainerLabel.classList.add('positionContainerLabel');
        this._positionContainerLabel.innerHTML = 'Character Position';

        this._positionContainer.appendChild(this._positionContainerInput);
        this._positionContainer.appendChild(this._positionContainerLabel);

        // Items List.
        this._itemsListContainer = document.createElement('div');
        this._itemsListContainer.classList.add('itemsListContainer');

        this._itemsListContainerTop = document.createElement('div');
        this._itemsListContainerTop.classList.add('itemsListContainerTop');

        this._itemsListContainerMiddle = document.createElement('div');
        this._itemsListContainerMiddle.classList.add('itemsListContainerMiddle');

        this._itemsListContainerBottom = document.createElement('div');
        this._itemsListContainerBottom.classList.add('itemsListContainerBottom');

        this._itemsListInput = document.createElement('input');
        this._itemsListInput.classList.add('itemsListInput');

        this._itemsListAddButton = document.createElement('button');
        this._itemsListAddButton.classList.add('itemsListAddButton');
        this._itemsListAddButton.innerHTML = 'Add';

        this._itemsListList = document.createElement('ol');
        this._itemsListList.classList.add('itemsListList');

        this._itemsListResetButton = document.createElement('button');
        this._itemsListResetButton.classList.add('itemsListResetButton');
        this._itemsListResetButton.innerHTML = 'Reset List';

        this._itemsListSortButton = document.createElement('button');
        this._itemsListSortButton.classList.add('itemsListSortButton');
        this._itemsListSortButton.innerHTML = 'Sort List';

        this._itemsListContainerTop.appendChild(this._itemsListInput);
        this._itemsListContainerTop.appendChild(this._itemsListAddButton);

        this._itemsListContainerMiddle.appendChild(this._itemsListList);
        this._itemsListContainerBottom.appendChild(this._itemsListResetButton);
        this._itemsListContainerBottom.appendChild(this._itemsListSortButton);

        this._itemsListContainer.appendChild(this._itemsListContainerTop);
        this._itemsListContainer.appendChild(this._itemsListContainerMiddle);
        this._itemsListContainer.appendChild(this._itemsListContainerBottom);

        // Main Container Appending.
        this._mainContainer.appendChild(this._positionContainer);
        console.log('before last appendChild');
        this._mainContainer.appendChild(this._itemsListContainer);
        console.log('after last appendChild');

    }

    /**
    * SetupEvents()     Sets up events.
    * 
    */
    setupEvents() {
        // TODO: Needs fixing.
        this._positionContainerInput.addEventListener('change',
            (e) => this._handleCharacterPositionChange(e));

        this._itemsListAddButton.addEventListener('click',
            () => this._addItemToList());

        this._itemsListResetButton.addEventListener('click',
            () => this._resetList());

        this._itemsListSortButton.addEventListener('click',
            () => this._sortList());
    }

    /**
    * SetupProperties()     Sets up properties.
    * 
    */    
    setupProperties() {
        this._characterPosition = 0;
        this._listy = new Listy();
    }

    /** Getters */

    /**
    * element     The Main Appendable element for this class.
    * @type {element}
    */
    get element() {
        return this._mainContainer;
    }

    /** Setters */

    /**
    * characterPosition     Sets up events.
    * @type {number}
    */
    set characterPosition(characterPosition) {
        this._characterPosition = characterPosition;
    }

    /** Other Methods */

    /**
    * handleCharacterPositionChange()     Handles the character position change.
    * 
    */
    _handleCharacterPositionChange() {
        this.characterPosition = this._positionContainerInput.value;
    }

    /**
    * addItemToList()     Adds an item to the list
    * 
    */
    _addItemToList() {
        this._listy.addItem(this._itemsListInput.value);
        this._itemsListInput.value = '';

        this._refreshList();
    }

    /**
    * sortList()     Sorts the List.
    * 
    */
    _sortList() {
        this._listy.sortOnCharacterPosition(this._characterPosition);
        this._refreshList();
    }

    /**
    * resetList()     Resets the List.
    * 
    */
    _resetList() {
        this._listy.reset();
        this._refreshList();
    }

    /**
    * refreshList()     Refreshes the List - Redraws the element etc.
    * 
    */
    _refreshList() {

        this._itemsListList.innerHTML = '';

        this._listy.list.forEach((item) => {
            let tempLi = document.createElement('li');
            tempLi.innerHTML = item;

            this._itemsListList.appendChild(tempLi);
            console.log('THE ITEM: ', item)

        });
    }


}