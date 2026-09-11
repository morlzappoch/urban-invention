import { useState } from "react"
import {
  ShieldCheck,
  Landmark,
  Users,
  BarChart3,
  Bell,
  Wallet,
  Lock,
} from "lucide-react"

export default function CleanHandsPrototype() {
  const [activePage, setActivePage] = useState("dashboard")
  const [balance, setBalance] = useState(2500)
  const [loanAmount, setLoanAmount] = useState(500)
  const [message, setMessage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const transactions = [
    { name: "Community Deposit", amount: "+$250" },
    { name: "Housing Initiative", amount: "-$80" },
    { name: "Business Grant", amount: "-$120" },
    { name: "Entrepreneur Fund", amount: "+$500" },
  ]

  const login = () => {
    if (username.trim() && password.trim()) {
      setLoggedIn(true)
      setMessage("Secure authentication successful.")
    }
  }

  const applyLoan = () => {
    setMessage(`Loan application submitted for $${loanAmount}. Community review pending.`)
  }

  const depositFunds = () => {
    setBalance((prev) => prev + 100)
    setMessage("$100 community deposit added successfully.")
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-3">
            Clean Hands Clean Money FAM
          </h1>

          <p className="text-emerald-300 mb-6">
            Secure Indigenous Financial Access Portal
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-2xl p-4"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-2xl p-4"
            />

            <button
              onClick={login}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 rounded-2xl transition"
            >
              Secure Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <nav className="flex flex-wrap gap-3 bg-black border border-gray-800 rounded-3xl p-4 sticky top-4 z-50">
          {[
            "dashboard",
            "accounts",
            "loans",
            "community",
            "security",
            "investors",
          ].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-5 py-3 rounded-2xl capitalize transition ${
                activePage === page
                  ? "bg-emerald-500 text-black"
                  : "bg-gray-900 text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </nav>

        <header className="border border-emerald-500/30 rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                Clean Hands Clean Money FAM
              </h1>

              <p className="text-xl text-emerald-300 mb-4">
                Indigenous-Led Ethical Financial Infrastructure Prototype
              </p>
            </div>

            <div className="bg-black border border-emerald-500/20 rounded-3xl p-6 w-full md:w-80">
              <p className="text-gray-400 text-sm">Community Wallet</p>

              <h2 className="text-5xl font-bold mt-2">${balance}</h2>

              <button
                onClick={depositFunds}
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-2xl transition"
              >
                Deposit $100
              </button>
            </div>
          </div>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-900 rounded-3xl p-5 border border-gray-800">
            <Wallet className="mb-3 text-emerald-400" />
            <p className="text-gray-400 text-sm">Active Wallets</p>
            <h3 className="text-3xl font-bold">12,840</h3>
          </div>

          <div className="bg-gray-900 rounded-3xl p-5 border border-gray-800">
            <Users className="mb-3 text-emerald-400" />
            <p className="text-gray-400 text-sm">Communities Supported</p>
            <h3 className="text-3xl font-bold">48</h3>
          </div>

          <div className="bg-gray-900 rounded-3xl p-5 border border-gray-800">
            <Landmark className="mb-3 text-emerald-400" />
            <p className="text-gray-400 text-sm">Business Investments</p>
            <h3 className="text-3xl font-bold">$18.4M</h3>
          </div>

          <div className="bg-gray-900 rounded-3xl p-5 border border-gray-800">
            <BarChart3 className="mb-3 text-emerald-400" />
            <p className="text-gray-400 text-sm">Economic Growth</p>
            <h3 className="text-3xl font-bold">+32%</h3>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">
              Loan Application Prototype
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">
                  Requested Amount
                </label>

                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-2 bg-black border border-gray-700 rounded-2xl p-4 text-white"
                />
              </div>

              <button
                onClick={applyLoan}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-2xl transition"
              >
                Submit Application
              </button>

              {message && (
                <div className="bg-black border border-emerald-500/20 rounded-2xl p-4 text-emerald-300">
                  {message}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Recent Transactions</h2>

            <div className="space-y-3">
              {transactions.map((tx, idx) => (
                <div
                  key={idx}
                  className="bg-black rounded-2xl p-4 border border-emerald-500/20 flex justify-between"
                >
                  <span>{tx.name}</span>
                  <span>{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">AI Fraud Detection</h2>

            <div className="space-y-4">
              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20 flex justify-between">
                <span>Suspicious Login Attempt</span>
                <Bell className="text-yellow-400" />
              </div>

              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20 flex justify-between">
                <span>Account Protection Status</span>
                <ShieldCheck className="text-emerald-400" />
              </div>

              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20 flex justify-between">
                <span>Blockchain Security Layer</span>
                <Lock className="text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Community Impact</h2>

            <div className="space-y-3 text-gray-300">
              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20">
                • Indigenous businesses funded: 214
              </div>

              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20">
                • Housing initiatives supported: 76
              </div>

              <div className="bg-black rounded-2xl p-4 border border-emerald-500/20">
                • Youth entrepreneurship grants issued: 138
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Founder & Protection</h2>

            <div className="bg-black rounded-2xl p-5 border border-emerald-500/20 text-sm leading-relaxed text-gray-400">
              Copyright © 2026 Morley Moses Apooch. All Rights Reserved.
              <br />
              <br />
              Protected internationally under the Berne Convention.
              <br />
              <br />
              Digitally Signed by Morley Moses Apooch.
              <br />
              <br />
              Contact: apoochmorley@protonmail.com
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
