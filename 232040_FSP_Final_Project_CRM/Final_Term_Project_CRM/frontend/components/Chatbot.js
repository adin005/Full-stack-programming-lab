'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, X, Send } from 'lucide-react';
import API from '../lib/api';

const BOT_NAME = 'CRM Bot';

const COMMANDS = {
  help: ['help', 'commands', 'what can you do'],
  customers: ['show customers', 'list customers', 'all customers', 'customer list'],
  add: ['add customer', 'new customer', 'create customer'],
  invoice: ['invoice', 'create invoice', 'generate invoice', 'open invoice'],
  dashboard: ['dashboard', 'go home', 'home'],
  stats: ['stats', 'statistics', 'summary'],
};

const matchCommand = (input) => {
  const lower = input.toLowerCase().trim();
  for (const [cmd, phrases] of Object.entries(COMMANDS)) {
    if (phrases.some((p) => lower.includes(p))) return cmd;
  }
  return null;
};

export default function Chatbot({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your CRM Assistant 👋\nType **help** to see what I can do." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  const router = useRouter();

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { if (defaultOpen) setOpen(true); }, [defaultOpen]);

  const addBot = (text) => setMessages((prev) => [...prev, { from: 'bot', text }]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const cmd = matchCommand(userMsg);

    setTimeout(async () => {
      switch (cmd) {
        case 'help':
          addBot(`Here's what I can do:\n• **show customers** — list all customers\n• **add customer** — go to add form\n• **generate invoice** — open invoice module\n• **dashboard** — go to main dashboard\n• **stats** — show summary stats`);
          break;
        case 'customers':
          try {
            const { data } = await API.get('/customers');
            const list = data.customers.slice(0, 8).map((c, i) => `${i + 1}. ${c.name} (${c.status})`).join('\n');
            addBot(`📋 Customers (${data.count} total):\n${list}${data.count > 8 ? '\n...and more' : ''}`);
            router.push('/dashboard/customers');
          } catch { addBot('Could not fetch customers.'); }
          break;
        case 'add':
          addBot('📝 Taking you to Add Customer...');
          router.push('/dashboard/customers/new');
          break;
        case 'invoice':
          addBot('🧾 Opening Invoice module...');
          router.push('/dashboard/invoices');
          break;
        case 'dashboard':
          addBot('🏠 Going to Dashboard...');
          router.push('/dashboard');
          break;
        case 'stats':
          try {
            const { data } = await API.get('/customers');
            const active = data.customers.filter((c) => c.status === 'Active').length;
            const leads = data.customers.filter((c) => c.status === 'Lead').length;
            const inactive = data.customers.filter((c) => c.status === 'Inactive').length;
            addBot(`📊 Stats:\n• Total: ${data.count}\n• Active: ${active}\n• Leads: ${leads}\n• Inactive: ${inactive}`);
          } catch { addBot('Could not load stats.'); }
          break;
        default:
          addBot(`I don't understand that. Type **help** to see available commands.`);
      }
      setLoading(false);
    }, 500);
  };

  const renderText = (text) =>
    text.split('\n').map((line, i) => (
      <span key={i}>
        {line.replace(/\*\*(.*?)\*\*/g, (_, m) => m).split(/\*\*/).map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-blue-300">{part}</strong> : part
        )}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));

  return (
    <>
      {/* Toggle button */}
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors">
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col" style={{ height: '460px' }}>
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-700 rounded-t-2xl bg-blue-600">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-sm">{BOT_NAME}</p>
              <p className="text-xs text-blue-200">Always online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                  ${msg.from === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-slate-700 text-slate-100 rounded-bl-sm'}`}>
                  {renderText(msg.text)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-700">
            <div className="flex gap-2">
              <input className="input flex-1 text-sm py-2" placeholder="Type a command..."
                value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
              <button onClick={handleSend} className="btn-primary px-3 py-2">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
