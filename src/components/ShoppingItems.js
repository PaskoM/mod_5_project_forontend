import React from 'react'; 

function ShoppingItems(props) {
    return (<div className="shopping-list">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          {props.name}
                            <span>
                                <div class="remove-favourite">
                                    <div class="awl-btn highlight">
                                        <div onClick={() => props.removeItem(props.itemId)} class="awl-btn-icon">
                                            <i class = "fas fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
    )}
                 
export default ShoppingItems


