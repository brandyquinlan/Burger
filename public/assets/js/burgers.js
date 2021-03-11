// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (e) => {
    if (e) {
        console.info('DOM loaded');
    }

    // UPDATE
    const DevourBtns = document.querySelectorAll('.change-devour');

    // Set up the event listener for the create button
    if (DevourBtns) {
        DevourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newDevour'); //*

                const newDevourState = {
                    devour: newDevour, //*
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newDevourState) //*
                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log(`changed burger to: ${newDevour}`);
                        location.reload();
                    } else {
                        alert('something went wrong!');
                    };
                });
            });
        });
    };

    // CREATE
    const createBurgerBtn = document.getElementById('order-burger');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            // Grabs the value of the textarea that goes by the name, "quote"
            const newBurger = {
                burger_name: document.getElementById('burger').value.trim(),
                devour: false
            };

            // Send POST request to create a new quote
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burger').value = '';

                // Reload the page so the user can see the new quote
                console.log('Created a new burger!');
                location.reload();
            });
        });
    };
});