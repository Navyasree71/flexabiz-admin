import { useEffect, useState } from 'react';

function CountUp({ end, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const inc = end / 70;
    const t = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 18);
    return () => clearInterval(t);
  }, [end]);
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function App() {
  const [active, setActive] = useState('dashboard');
  const [open, setOpen] = useState(false);

  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'categories', label: 'Categories', icon: '🏷️' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'roles', label: 'Roles', icon: '🔐' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col md:flex-row">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
        *{font-family:'Space Grotesk',sans-serif}
      `}</style>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-white/10 bg-[#0F0F0F] sticky top-0 z-50">
        <div><h1 className="font-bold">FlexaBiz Admin</h1><p className="text-[9px] text-white/30 tracking-widest">PREMIUM SUITE</p></div>
        <button onClick={()=>setOpen(!open)} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">{open?'X':'☰'}</button>
      </div>

      {/* SIDEBAR */}
      <div className={`${open?'flex':'hidden'} md:flex w-full md:w-[280px] border-r border-white/[0.08] bg-[#0F0F0F] p-6 md:fixed md:h-screen flex-col z-40`}>
        <div className="hidden md:block"><h1 className="text-[21px] font-bold">FlexaBiz Admin</h1><p className="text-white/30 text-[10px] tracking-[0.2em] mt-1 uppercase">Premium Suite</p></div>
        <div className="mt-2 md:mt-10 space-y-1 w-full">
          {menu.map(m=>(
            <button key={m.id} onClick={()=>{setActive(m.id); setOpen(false)}} className={`w-full flex gap-3 px-4 py-3 rounded-xl text-[13px] ${active===m.id?'bg-white text-black font-semibold':'text-white/45 hover:text-white hover:bg-white/[0.05]'}`}>
              <span>{m.icon}</span>{m.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="md:ml-[280px] flex-1 p-4 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <div><h2 className="text-[26px] md:text-[30px] font-bold capitalize">{active}</h2><p className="text-white/40 text-sm">Manage your {active} efficiently</p></div>
          <div className="hidden md:flex w-10 h-10 rounded-full bg-white text-black items-center justify-center font-bold">N</div>
        </div>

        {active==='dashboard'? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#151515] border border-white/[0.08] rounded-[16px] p-5"><p className="text-white/40 text-[10px] uppercase">Total Revenue</p><h3 className="text-[22px] md:text-[28px] font-bold mt-2"><CountUp end={12450} prefix="$"/></h3><p className="text-emerald-400 text-[11px] mt-2">↗ +12.5%</p></div>
              <div className="bg-[#151515] border border-white/[0.08] rounded-[16px] p-5"><p className="text-white/40 text-[10px] uppercase">Active Users</p><h3 className="text-[22px] md:text-[28px] font-bold mt-2"><CountUp end={3420}/></h3><p className="text-emerald-400 text-[11px] mt-2">↗ +8.2%</p></div>
              <div className="bg-[#151515] border border-white/[0.08] rounded-[16px] p-5"><p className="text-white/40 text-[10px] uppercase">Total Orders</p><h3 className="text-[22px] md:text-[28px] font-bold mt-2"><CountUp end={1284}/></h3><p className="text-emerald-400 text-[11px] mt-2">↗ +25.5%</p></div>
              <div className="bg-[#151515] border border-white/[0.08] rounded-[16px] p-5"><p className="text-white/40 text-[10px] uppercase">Growth Rate</p><h3 className="text-[22px] md:text-[28px] font-bold mt-2"><CountUp end={89} suffix="%"/></h3><p className="text-emerald-400 text-[11px] mt-2">↗ +4.3%</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2 bg-[#151515] border border-white/[0.06] rounded-[16px] p-6">
                <h4 className="font-medium mb-6">Revenue Analytics</h4>
                <div className="h-[200px] flex items-end gap-2 md:gap-3">
                  {[50,80,55,100,65,90,60,105,70,95,80,110].map((h,i)=>(<div key={i} className="flex-1 bg-[#2A2A2A] rounded-t-[6px]" style={{height:`${h}%`}}></div>))}
                </div>
              </div>
              <div className="bg-[#151515] border border-white/[0.06] rounded-[16px] p-6">
                <h4 className="font-semibold mb-5">Recent Activity</h4>
                <div className="space-y-4 text-[13px] text-white/80">
                  <div>New user registered <p className="text-white/30 text-[11px]">1h ago</p></div>
                  <div>Order #1234 shipped <p className="text-white/30 text-[11px]">2h ago</p></div>
                  <div>Product out of stock <p className="text-white/30 text-[11px]">3h ago</p></div>
                  <div>Payment received <p className="text-white/30 text-[11px]">4h ago</p></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#151515] border border-white/[0.06] rounded-[16px] p-5 md:p-8">
            <div className="flex justify-between mb-6"><h3 className="text-[18px] font-bold capitalize">{active} Management</h3><button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold">+ Add</button></div>
            <div className="grid gap-3">
              {[1,2,3,4,5].map(i=><div key={i} className="flex justify-between items-center p-4 rounded-xl bg-[#1E1E1E] border border-white/[0.05]"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">{menu.find(m=>m.id===active)?.icon}</div><div><p className="font-medium text-[13px]">Sample {active} #{i}</p><p className="text-white/40 text-xs">Active • 2h ago</p></div></div><button className="px-3 py-1 rounded-full bg-white text-black text-xs">Edit</button></div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}