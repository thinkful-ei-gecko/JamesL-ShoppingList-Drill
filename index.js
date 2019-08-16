$(function(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const shoppingItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');

        //if adding 'fish' as value->will append fish to shopping list
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${shoppingItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });



    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        $(event.currentTarget).closest('li').remove()
    });
  
});