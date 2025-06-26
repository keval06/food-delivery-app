# 🍕 Food Delivery App

A modern, full-featured React food delivery application with real-time cart management, category filtering, and an intuitive user interface built with Redux Toolkit and Tailwind CSS.

## ✨ Features

- **Dynamic Food Catalog**: Browse 25+ food items across 8 categories
- **Smart Search**: Real-time search with ESC key to clear functionality
- **Category Filtering**: Filter by Breakfast, Soups, Pasta, Main Course, Pizza, Burger, and Vegetarian options
- **Redux Cart Management**: Add, remove, increment/decrement quantities with persistent state
- **Sliding Cart Panel**: Smooth slide-in cart with order summary and calculations
- **Price Calculations**: Automatic subtotal, delivery fees, and tax calculations
- **Toast Notifications**: User feedback for cart actions and order placement
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Indicators**: Visual veg/non-veg indicators for dietary preferences

## 🚀 Technologies Used

- **Frontend**: React 18 with Hooks (useState, useContext, useEffect)
- **State Management**: Redux Toolkit for cart operations
- **Styling**: Tailwind CSS with custom responsive design
- **Icons**: React Icons (react-icons)
- **Notifications**: React Toastify
- **Build Tool**: Vite for fast development and building

## 📊 Data Flow Architecture

### Component Hierarchy
```
App
├── Home (Main Container)
    ├── Nav (Navigation & Search)
    ├── Category Grid (Filter Controls)
    ├── Food Cards Grid (Product Display)
    └── Cart Slider (Shopping Cart)
        └── Cart Item Cards (Individual Items)
```

### State Management Flow

#### Context API (Global App State)
```javascript
UserContext provides:
├── input (search term)
├── category (filtered food items)
├── showCart (cart visibility)
└── Context methods for state updates
```

#### Redux Store (Cart State)
```javascript
cartSlice manages:
├── AddItem (add/increment existing items)
├── RemoveItem (delete from cart)
├── IncrementQty (increase quantity)
└── DecrementQty (decrease quantity)
```

### Request/Response Flow

#### 1. Search Flow
```
User Input → Nav Component → useEffect → Filter food_items → Update category state → Re-render Cards
```

#### 2. Category Filter Flow
```
Category Click → filterCategory() → Filter food_items by category → setCategory() → Display filtered results
```

#### 3. Cart Operations Flow
```
Add to Cart → dispatch(AddItem) → Redux Store Update → Cart Count Update → Toast Notification

Cart Quantity Change → dispatch(IncrementQty/DecrementQty) → Store Update → Price Recalculation

Remove Item → dispatch(RemoveItem) → Store Update → UI Update
```

#### 4. Price Calculation Flow
```
Cart Items → useSelector(cart) → Calculate subtotal → Add delivery fee + taxes → Display total
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Nav.jsx              # Navigation with search
│   ├── Card.jsx             # Food item display card
│   └── Card2.jsx            # Cart item card
├── pages/
│   ├── Home.jsx             # Main application container
│   └── CartDemo.jsx         # Redux testing component
├── Context/
│   └── UserContext.jsx      # Global state management
├── redux/
│   ├── cartSlice.js         # Cart operations reducer
│   └── store.js             # Redux store configuration
├── assets/                  # Food item images
├── Category.jsx             # Category data and icons
├── food.js                  # Food items data
└── App.jsx                  # Root component
```

## 💡 Key Implementation Features

### Smart Search with Persistence
- Real-time filtering as user types
- ESC key clears search and resets to full catalog
- Case-insensitive search across food names

### Redux Cart Logic
- **Duplicate Prevention**: Existing items increment quantity instead of creating duplicates
- **Quantity Controls**: Minimum quantity of 1 enforced
- **Automatic Calculations**: Real-time price updates with tax and delivery fees

### Responsive Cart Design
- **Slide Animation**: Smooth translate-x transitions
- **Mobile Optimization**: Full-width on mobile, 40vw on desktop
- **Overflow Handling**: Scrollable content for large orders

### Category System
- **Visual Icons**: Custom React Icons for each category
- **All Filter**: Shows complete catalog
- **Dynamic Filtering**: Instant category-based filtering

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/keval06/food-delivery-app

# Navigate to project directory
cd food-delivery-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Usage Guide

1. **Browse Items**: Scroll through food categories or use search
2. **Filter by Category**: Click category icons to filter items
3. **Add to Cart**: Click "Add to Cart" on any item
4. **Manage Cart**: Click cart icon to view/modify orders
5. **Adjust Quantities**: Use +/- buttons in cart
6. **Place Order**: Review total and click "Place Order"

## 🎨 Design Highlights

- **Modern UI**: Clean, minimalist design with green accent colors
- **Micro-interactions**: Hover effects, smooth transitions, and visual feedback
- **Accessibility**: Proper contrast ratios and semantic HTML
- **Loading States**: Smooth transitions between different app states
- **Visual Hierarchy**: Clear typography and spacing for optimal readability

## 🧪 Testing Components

The app includes `CartDemo.jsx` for testing Redux functionality independently, allowing developers to verify cart operations without the full UI.

## 📈 Performance Features

- **Efficient Filtering**: Single-pass array filtering for search and categories
- **Minimal Re-renders**: Optimized useEffect dependencies
- **Image Optimization**: Proper image handling with object-cover
- **Bundle Optimization**: Tree-shaking with modern build tools

## Key Sections :

- **Data Flow Architecture** - Visual representation of component hierarchy and state management
- **Request/Response Flow** - Step-by-step flow for search, filtering, cart operations, and price calculations
- **Detailed Project Structure** - Complete file organization with descriptions
- **Smart Implementation Features** - Highlighting unique aspects like duplicate prevention, ESC key functionality
- **Data Models** - Clear structure definitions for food items and cart items

## Control Flow **:

- **Context API** manages global app state (search, categories, cart visibility)
- **Redux Store** handles cart-specific operations with proper action dispatching
- **Component Communication** shows how user interactions trigger state updates
- **Price Calculation Pipeline** demonstrates the automatic computation flow
## 🔐 Data Models

### Food Item Structure
```javascript
{
  id: number,
  food_name: string,
  food_category: string,
  food_type: "veg" | "Non-Veg.",
  food_image: string,
  price: number
}
```

### Cart Item Structure
```javascript
{
  id: number,
  name: string,
  price: number,
  image: string,
  qty: number
}
```

---

*Built with ❤️ using React, Redux Toolkit, and Tailwind CSS*