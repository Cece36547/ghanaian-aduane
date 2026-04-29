import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>

      {/* HEADER */}
      <header>
        <div className="logo">🍲 Ghanaian Aduane</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="home">
        <h1>Ghanaian Aduane</h1>
        <p>
          From across the ocean to New York — authentic Ghanaian cuisine to your table.
        </p>
      </section>

      {/* MENU */}
      <section id="menu">
        <h2>Our Menu</h2>

        <h3>🍚 Main Dishes</h3>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jollof Rice</td>
              <td>$16</td>
              <td><button onClick={() => addToCart("Jollof Rice", 16)}>Add</button></td>
            </tr>

            <tr>
              <td>Fufu & Light Soup</td>
              <td>$18</td>
              <td><button onClick={() => addToCart("Fufu & Light Soup", 18)}>Add</button></td>
            </tr>

            <tr>
              <td>Grilled Tilapia</td>
              <td>$22</td>
              <td><button onClick={() => addToCart("Grilled Tilapia", 22)}>Add</button></td>
            </tr>

            <tr>
              <td>Waakye Platter</td>
              <td>$17</td>
              <td><button onClick={() => addToCart("Waakye Platter", 17)}>Add</button></td>
            </tr>

            <tr>
              <td>Groundnut Soup & Rice Balls</td>
              <td>$16</td>
              <td><button onClick={() => addToCart("Groundnut Soup", 16)}>Add</button></td>
            </tr>
          </tbody>
        </table>

        <h3>🥗 Sides & Drinks</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Kelewele</td>
              <td>$7</td>
              <td><button onClick={() => addToCart("Kelewele", 7)}>Add</button></td>
            </tr>

            <tr>
              <td>Puff Puff</td>
              <td>$6</td>
              <td><button onClick={() => addToCart("Puff Puff", 6)}>Add</button></td>
            </tr>

            <tr>
              <td>Hibiscus Zobo</td>
              <td>$5</td>
              <td><button onClick={() => addToCart("Hibiscus Zobo", 5)}>Add</button></td>
            </tr>

            <tr>
              <td>Fresh Coconut Water</td>
              <td>$6</td>
              <td><button onClick={() => addToCart("Coconut Water", 6)}>Add</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CART */}
      <section>
        <h2>🛒 Shopping Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}

        <h3>Total: ${total}</h3>

        <button onClick={() => setCart([])}>Clear Cart</button>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Us</h2>
        <p>
          Ghanaian Aduane was founded to bring authentic Ghanaian food to NYC.
        </p>
      </section>

    </div>
  );
}

export default App;