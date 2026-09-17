import { useState } from 'react'

const initialUsers = [
  { id:1, name:"Aarav Sharma", email:"aarav@flexatech.com", company:"FlexaTech", plan:"Pro", status:"Active", revenue:12500, role:"Manager" },
  { id:2, name:"Priya Verma", email:"priya@bizflow.com", company:"BizFlow", plan:"Starter", status:"Active", revenue:8300, role:"Editor" },
  { id:3, name:"Rahul Mehta", email:"rahul@cloudnine.com", company:"CloudNine", plan:"Free", status:"Inactive", revenue:0, role:"Viewer" },
  { id:4, name:"Sneha Patel", email:"sneha@flexabiz.in", company:"FlexaBiz", plan:"Enterprise", status:"Active", revenue:21000, role:"Admin" },
  { id:5, name:"Vikram Singh", email:"vikram@startx.com", company:"StartX", plan:"Pro", status:"Pending", revenue:4500, role:"Manager" },
]

export default function App(){
  const [page,setPage]=useState("Dashboard")
  const [users,setUsers]=useState(initialUsers)
  const [search,setSearch]=useState("")
  const [showModal,setShowModal]=useState(false)
  const [newName,setNewName]=useState("")
  const [newCompany,setNewCompany]=useState("")
  
  const filtered = users.filter(u=>u.name.toLowerCase().includes(search.toLowerCase()))
  const total = users.reduce((a,b)=>a+b.revenue,0)

  const products = [
    { id:1, name:"Flexa CRM Pro", cat:"Software", price:299, stock:150, status:"Active" },
    { id:2, name:"Analytics Suite", cat:"Software", price:499, stock:20, status:"Low Stock" },
    { id:3, name:"Enterprise License", cat:"License", price:1299, stock:999, status:"Active" },
  ]
  const orders = [
    { id:"#ORD-001", customer:"Aarav Sharma", total:12500, status:"Completed", payment:"Paid", date:"2026-09-16" },
    { id:"#ORD-002", customer:"Priya Verma", total:8300, status:"Processing", payment:"Pending", date:"2026-09-17" },
    { id:"#ORD-003", customer:"Vikram Singh", total:4500, status:"Shipped", payment:"Paid", date:"2026-09-17" },
  ]

  return(
    <div style={{display:'flex', minHeight:'100vh', background:'#0a0a0b', color:'white', fontFamily:'sans-serif'}}>
      <div style={{width:240, background:'#111113', borderRight:'1px solid #222', padding:20}}>
        <h1 style={{fontSize:20, fontWeight:800, marginBottom:20}}>Flexa<span style={{color:'#8b5cf6'}}>Biz</span></h1>
        {["Dashboard","Users","Products","Orders","Categories","Analytics","Notifications","Content","Roles","Settings"].map(p=>(
          <div key={p} onClick={()=>setPage(p)} style={{padding:'10px 12px', marginBottom:5, borderRadius:8, cursor:'pointer', background:page===p?'#7c3aed':'transparent', fontSize:13}}>{p}</div>
        ))}
      </div>
      <div style={{flex:1, padding:24}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:20}}>
          <h2 style={{fontSize:22, fontWeight:'bold'}}>{page}</h2>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search users..." style={{background:'#1a1a1d', border:'1px solid #333', padding:'8px 12px', borderRadius:8, color:'white'}}/>
        </div>

        {page==="Dashboard" && (
          <>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:20}}>
              <div style={{background:'#111113', border:'1px solid #222', padding:16, borderRadius:12}}><p style={{color:'#888', fontSize:12}}>Total Revenue</p><h3 style={{fontSize:20, marginTop:6}}>${total.toLocaleString()}</h3><p style={{color:'#10b981', fontSize:11, marginTop:6}}>+12.5% growth</p></div>
              <div style={{background:'#111113', border:'1px solid #222', padding:16, borderRadius:12}}><p style={{color:'#888', fontSize:12}}>Active Users</p><h3 style={{fontSize:20, marginTop:6}}>{users.filter(u=>u.status==='Active').length}</h3><p style={{color:'#10b981', fontSize:11, marginTop:6}}>+4 new today</p></div>
              <div style={{background:'#111113', border:'1px solid #222', padding:16, borderRadius:12}}><p style={{color:'#888', fontSize:12}}>Orders</p><h3 style={{fontSize:20, marginTop:6}}>{orders.length}</h3><p style={{color:'#888', fontSize:11, marginTop:6}}>2 processing</p></div>
              <div style={{background:'linear-gradient(135deg,#7c3aed,#4f46e5)', padding:16, borderRadius:12}}><p style={{fontSize:12}}>Conversion</p><h3 style={{fontSize:20, marginTop:6}}>68.4%</h3></div>
            </div>
            <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, overflow:'hidden'}}>
              <div style={{padding:14, borderBottom:'1px solid #222', display:'flex', justifyContent:'space-between'}}><b>Recent Clients</b><button onClick={()=>setShowModal(true)} style={{background:'white', color:'black', border:'none', padding:'5px 12px', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>+ Add</button></div>
              <table style={{width:'100%', fontSize:12, borderCollapse:'collapse'}}><thead style={{color:'#888', background:'#0f0f10'}}><tr><th style={{padding:10, textAlign:'left'}}>Client</th><th style={{padding:10, textAlign:'left'}}>Company</th><th style={{padding:10, textAlign:'left'}}>Plan</th><th style={{padding:10, textAlign:'left'}}>Status</th></tr></thead><tbody>{filtered.map(u=><tr key={u.id} style={{borderBottom:'1px solid #1a1a1a'}}><td style={{padding:10}}>{u.name}</td><td style={{padding:10, color:'#ccc'}}>{u.company}</td><td style={{padding:10}}>{u.plan}</td><td style={{padding:10}}>{u.status}</td></tr>)}</tbody></table>
            </div>
          </>
        )}

        {page==="Users" && (
          <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}><b>User Management (Search, Filter, Add, Edit, Delete, Activate)</b><button onClick={()=>setShowModal(true)} style={{background:'#7c3aed', border:'none', color:'white', padding:'6px 12px', borderRadius:6, cursor:'pointer'}}>+ Add User</button></div>
            <table style={{width:'100%', fontSize:12, borderCollapse:'collapse'}}><thead style={{color:'#888'}}><tr><th style={{padding:8, textAlign:'left'}}>User</th><th style={{padding:8, textAlign:'left'}}>Status</th><th style={{padding:8, textAlign:'left'}}>Actions</th></tr></thead><tbody>{filtered.map(u=><tr key={u.id} style={{borderBottom:'1px solid #222'}}><td style={{padding:8}}>{u.name}</td><td style={{padding:8}}>{u.status}</td><td style={{padding:8}}><button onClick={()=>setUsers(users.map(x=>x.id===u.id?{...x,status:x.status==='Active'?'Inactive':'Active'}:x))} style={{background:'#222', color:'white', border:'1px solid #333', padding:'3px 8px', borderRadius:5, fontSize:11, marginRight:6, cursor:'pointer'}}>Toggle</button><button onClick={()=>setUsers(users.filter(x=>x.id!==u.id))} style={{background:'#ef4444', color:'white', border:'none', padding:'3px 8px', borderRadius:5, fontSize:11, cursor:'pointer'}}>Delete</button></td></tr>)}</tbody></table>
          </div>
        )}

        {page==="Products" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Product Management - Listing, Search, Category Filter, Stock</b><table style={{width:'100%', fontSize:12, borderCollapse:'collapse', marginTop:12}}><thead style={{color:'#888'}}><tr><th style={{padding:8, textAlign:'left'}}>Product</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead><tbody>{products.map(p=><tr key={p.id} style={{borderBottom:'1px solid #222'}}><td style={{padding:8}}>{p.name}</td><td style={{padding:8, textAlign:'center'}}>{p.cat}</td><td style={{padding:8, textAlign:'center'}}>${p.price}</td><td style={{padding:8, textAlign:'center'}}>{p.stock}</td></tr>)}</tbody></table></div>}

        {page==="Orders" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Order Management - Details, Customer, Status, Payment</b><table style={{width:'100%', fontSize:12, borderCollapse:'collapse', marginTop:12}}><thead style={{color:'#888'}}><tr><th style={{padding:8, textAlign:'left'}}>Order</th><th>Customer</th><th>Total</th><th>Status</th><th>Payment</th></tr></thead><tbody>{orders.map(o=><tr key={o.id} style={{borderBottom:'1px solid #222'}}><td style={{padding:8}}>{o.id}</td><td style={{padding:8}}>{o.customer}</td><td style={{padding:8}}>${o.total}</td><td style={{padding:8}}>{o.status}</td><td style={{padding:8}}>{o.payment}</td></tr>)}</tbody></table></div>}

        {page==="Categories" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Category Management - View, Add, Edit, Delete, Activate</b><div style={{marginTop:12, display:'flex', gap:10}}>{["Software (12)","License (5)","Service (8)"].map(c=><div key={c} style={{background:'#0f0f10', border:'1px solid #222', padding:12, borderRadius:8, fontSize:12}}>{c}</div>)}</div></div>}

        {page==="Analytics" && <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}><div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Revenue Trend</b><div style={{marginTop:16, display:'flex', gap:6, alignItems:'end', height:80}}>{[40,70,45,90,60,85,100].map((h,i)=><div key={i} style={{flex:1, background:'#7c3aed', height:h+'%', borderRadius:4}}></div>)}</div></div><div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Growth 92%</b><p style={{color:'#888', fontSize:12, marginTop:10}}>Orders 68% Customers 84% Revenue 92%</p></div></div>}

        {page==="Notifications" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Notifications - Read/Unread, Categories</b><div style={{marginTop:12}}><div style={{padding:10, background:'#7c3aed22', borderRadius:8, marginBottom:6, fontSize:12}}>New order #ORD-002 received - Order - 2m ago</div><div style={{padding:10, background:'#222', borderRadius:8, fontSize:12}}>Stock low for Analytics Suite - Product - 10m ago</div></div></div>}

        {page==="Content" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Content Management - Pages, Posts, Draft/Published</b><div style={{marginTop:12, fontSize:12}}><div style={{padding:8, borderBottom:'1px solid #222'}}>FlexaBiz Pricing Page - Published</div><div style={{padding:8, borderBottom:'1px solid #222'}}>How to scale SaaS - Draft</div><div style={{padding:8}}>Enterprise Features - Published</div></div></div>}

        {page==="Roles" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Roles and Permissions</b><table style={{width:'100%', fontSize:12, marginTop:12, borderCollapse:'collapse'}}><thead style={{color:'#888'}}><tr><th style={{textAlign:'left', padding:8}}>Role</th><th>Users</th><th>Products</th><th>Orders</th><th>Settings</th></tr></thead><tbody><tr style={{borderBottom:'1px solid #222'}}><td style={{padding:8}}>Administrator</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>YES</td></tr><tr style={{borderBottom:'1px solid #222'}}><td style={{padding:8}}>Manager</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>NO</td></tr><tr><td style={{padding:8}}>Editor</td><td style={{textAlign:'center'}}>NO</td><td style={{textAlign:'center'}}>YES</td><td style={{textAlign:'center'}}>NO</td><td style={{textAlign:'center'}}>NO</td></tr></tbody></table></div>}

        {page==="Settings" && <div style={{background:'#111113', border:'1px solid #222', borderRadius:12, padding:14}}><b>Settings - General, Profile, Notifications, Appearance, Security</b><div style={{marginTop:12}}><p style={{fontSize:12, color:'#888'}}>Company Name</p><input defaultValue="FlexaBiz Digital" style={{width:'100%', background:'#1a1a1d', border:'1px solid #333', padding:'8px', borderRadius:6, color:'white', marginTop:4}}/></div></div>}

        {showModal && <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50}}><div style={{background:'#1a1a1d', border:'1px solid #333', padding:20, borderRadius:12, width:320}}><h3 style={{fontSize:14, fontWeight:'bold'}}>Add New User</h3><input placeholder="Full Name" value={newName} onChange={e=>setNewName(e.target.value)} style={{width:'100%', background:'#111', border:'1px solid #333', padding:'8px', borderRadius:6, color:'white', marginTop:12}}/><input placeholder="Company" value={newCompany} onChange={e=>setNewCompany(e.target.value)} style={{width:'100%', background:'#111', border:'1px solid #333', padding:'8px', borderRadius:6, color:'white', marginTop:8}}/><div style={{display:'flex', gap:8, marginTop:12, justifyContent:'end'}}><button onClick={()=>setShowModal(false)} style={{background:'#222', color:'white', border:'1px solid #333', padding:'6px 12px', borderRadius:6, cursor:'pointer'}}>Cancel</button><button onClick={()=>{if(!newName) return; setUsers([...users,{id:Date.now(), name:newName, company:newCompany||"FlexaBiz", plan:"Starter", status:"Active", revenue:0}]); setShowModal(false); setNewName(""); setNewCompany("");}} style={{background:'#7c3aed', color:'white', border:'none', padding:'6px 12px', borderRadius:6, cursor:'pointer'}}>Add</button></div></div></div>}
      </div>
    </div>
  )
}