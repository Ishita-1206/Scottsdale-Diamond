import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Bell,
  LogOut,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Star
} from 'lucide-react';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const LuxuryAdmin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const products = [
    { id: 1, name: 'Eternal Diamond Ring', price: 2499, stock: 15, status: 'Active', category: 'Rings', image: ringImage, rating: 5 },
    { id: 2, name: 'Golden Grace Necklace', price: 1899, stock: 8, status: 'Active', category: 'Necklaces', image: necklaceImage, rating: 5 },
    { id: 3, name: 'Pearl Elegance Earrings', price: 899, stock: 0, status: 'Out of Stock', category: 'Earrings', image: ringImage, rating: 4 },
    { id: 4, name: 'Royal Sapphire Bracelet', price: 3299, stock: 22, status: 'Active', category: 'Bracelets', image: necklaceImage, rating: 5 },
  ];

  const orders = [
    { id: '#ORD001', customer: 'Sarah Johnson', total: 2499, status: 'Completed', date: '2024-01-15', items: 2 },
    { id: '#ORD002', customer: 'Michael Chen', total: 1899, status: 'Processing', date: '2024-01-14', items: 1 },
    { id: '#ORD003', customer: 'Emma Davis', total: 899, status: 'Shipped', date: '2024-01-13', items: 3 },
    { id: '#ORD004', customer: 'David Wilson', total: 599, status: 'Pending', date: '2024-01-12', items: 1 },
  ];

  const customers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', orders: 5, spent: 12495, joined: '2023-06-15', tier: 'VIP' },
    { id: 2, name: 'Michael Chen', email: 'michael@email.com', orders: 3, spent: 5697, joined: '2023-08-22', tier: 'Gold' },
    { id: 3, name: 'Emma Davis', email: 'emma@email.com', orders: 7, spent: 18990, joined: '2023-04-10', tier: 'Platinum' },
    { id: 4, name: 'David Wilson', email: 'david@email.com', orders: 2, spent: 2998, joined: '2023-12-01', tier: 'Silver' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-amber-500/20 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-300 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold text-white font-playfair">$145,231</p>
              <p className="text-amber-400 text-sm flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +12% from last month
              </p>
            </div>
            <div className="bg-amber-200 p-3 rounded-xl">
              <DollarSign className="text-amber-700" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-600/20 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold text-white font-playfair">1,234</p>
              <p className="text-gray-400 text-sm flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +8% from last month
              </p>
            </div>
            <div className="bg-slate-200 p-3 rounded-xl">
              <ShoppingCart className="text-slate-700" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-amber-500/20 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-300 text-sm font-medium">Total Products</p>
              <p className="text-3xl font-bold text-white font-playfair">156</p>
              <p className="text-amber-400 text-sm flex items-center mt-1">
                <Plus size={14} className="mr-1" />
                +3 new this week
              </p>
            </div>
            <div className="bg-amber-200 p-3 rounded-xl">
              <Package className="text-amber-700" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-600/20 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm font-medium">Total Customers</p>
              <p className="text-3xl font-bold text-white font-playfair">892</p>
              <p className="text-gray-400 text-sm flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +15% from last month
              </p>
            </div>
            <div className="bg-slate-200 p-3 rounded-xl">
              <Users className="text-slate-700" size={24} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h3 className="text-xl font-playfair font-bold text-white mb-6">Recent Orders</h3>
          <div className="space-y-4">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-black rounded-xl hover:bg-gray-800 transition-colors">
                <div>
                  <p className="font-semibold text-white font-inter">{order.id}</p>
                  <p className="text-sm text-gray-300">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-600 font-inter">${order.total.toLocaleString()}</p>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-amber-100 text-amber-700' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h3 className="text-xl font-playfair font-bold text-white mb-6">Top Products</h3>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 bg-black rounded-xl hover:bg-gray-800 transition-colors">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-white font-inter">{product.name}</p>
                  <p className="text-sm text-gray-300">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-600 font-inter">${product.price}</p>
                  <div className="flex items-center">
                    <Star size={12} className="text-amber-400 fill-current" />
                    <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Order Management</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            <Download size={18} className="mr-2" />
            Export Orders
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>
            <select className="px-6 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-amber-400 focus:outline-none transition-colors font-medium">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Items</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900 font-inter">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900 font-inter">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.items} items</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-bold text-amber-600 font-inter">${order.total.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-amber-100 text-amber-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-3">
                      <button className="text-amber-600 hover:text-amber-800 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Edit size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Customer Management</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all shadow-lg font-medium">
            <Plus size={18} className="mr-2" />
            Add Customer
          </button>
          <button className="flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            <Download size={18} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{customer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 font-inter">{customer.name}</div>
                        <div className="text-sm text-gray-500">ID: {customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                      customer.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                      customer.tier === 'VIP' ? 'bg-amber-100 text-amber-800' :
                      customer.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{customer.orders} orders</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-bold text-amber-600 font-inter">${customer.spent.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{customer.joined}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-3">
                      <button className="text-amber-600 hover:text-amber-800 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Edit size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-playfair font-bold text-gray-900">Product Management</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all shadow-lg font-medium">
            <Plus size={18} className="mr-2" />
            Add Product
          </button>
          <button className="flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            <Upload size={18} className="mr-2" />
            Import
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>
            <button className="flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover shadow-md" />
                      <div>
                        <div className="text-sm font-bold text-white font-inter">{product.name}</div>
                        <div className="text-sm text-gray-400">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-bold text-amber-600 font-inter">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-white">{product.stock} units</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star size={16} className="text-amber-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-white">{product.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-3">
                      <button className="text-amber-600 hover:text-amber-800 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'products':
        return renderProducts();
      case 'orders':
        return renderOrders();
      case 'customers':
        return renderCustomers();
      case 'analytics':
        return (
          <div className="text-center py-20">
            <BarChart3 size={64} className="mx-auto text-amber-400 mb-4" />
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Advanced analytics and business intelligence.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <Settings size={64} className="mx-auto text-amber-400 mb-4" />
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">System Settings</h3>
            <p className="text-gray-600">Configure system preferences and security settings.</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Luxury Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-gray-900 to-black shadow-2xl transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        
        <div className="flex items-center justify-between h-20 px-8 border-b border-gray-700">
          <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Elegant Admin
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-4 mb-2 text-left transition-all duration-200 rounded-xl ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg transform scale-105'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <IconComponent size={22} className="mr-4" />
                <span className="font-medium font-inter">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-700">
          <button className="flex items-center w-full text-gray-300 hover:text-red-400 transition-colors font-medium">
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Luxury Header */}
        <header className="bg-white shadow-lg border-b border-gray-100">
          <div className="flex items-center justify-between h-20 px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex items-center space-x-6">
              <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div>
                  <span className="text-gray-900 font-semibold font-inter">Admin User</span>
                  <p className="text-sm text-gray-500">Super Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default LuxuryAdmin;