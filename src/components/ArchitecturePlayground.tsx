import { useState } from 'react';
import { sampleSimulationEndpoints } from '../data/portfolioData';
import { 
  Play, 
  RotateCcw, 
  Zap, 
  Database, 
  Server, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Code,
  Sparkles,
  ArrowRight,
  Activity
} from 'lucide-react';

export default function ArchitecturePlayground() {
  const [selectedEndpointId, setSelectedEndpointId] = useState('boltticket_reserve');
  const [isRedisEnabled, setIsRedisEnabled] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [simulationCompleted, setSimulationCompleted] = useState(false);
  const [lastMetrics, setLastMetrics] = useState<{
    totalMs: number;
    cacheHit: boolean;
    dbQueries: number;
    savedLoad: string;
  } | null>(null);

  const selectedEndpoint = sampleSimulationEndpoints.find(e => e.id === selectedEndpointId) || sampleSimulationEndpoints[0];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationCompleted(false);
    setCurrentStep(0);

    // Step 0: Client sends request
    setTimeout(() => {
      // Step 1: Node.js API Gateway
      setCurrentStep(1);

      setTimeout(() => {
        if (isRedisEnabled) {
          // Step 2: Redis Cache Check -> HIT!
          setCurrentStep(2);

          setTimeout(() => {
            // Completed
            setCurrentStep(4);
            setIsSimulating(false);
            setSimulationCompleted(true);
            setLastMetrics({
              totalMs: selectedEndpoint.redisCacheTime + selectedEndpoint.serviceProcessingTime,
              cacheHit: true,
              dbQueries: 0,
              savedLoad: '96%'
            });
          }, 400);
        } else {
          // Redis Disabled / Miss -> Microservices -> SQL Database
          setCurrentStep(2); // Redis miss
          setTimeout(() => {
            setCurrentStep(3); // Microservice + SQL query
            setTimeout(() => {
              setCurrentStep(4); // Finished
              setIsSimulating(false);
              setSimulationCompleted(true);
              setLastMetrics({
                totalMs: selectedEndpoint.dbQueryTime + selectedEndpoint.serviceProcessingTime + 8,
                cacheHit: false,
                dbQueries: 1,
                savedLoad: '0% (Direct DB Load)'
              });
            }, 600);
          }, 350);
        }
      }, 350);
    }, 300);
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsSimulating(false);
    setSimulationCompleted(false);
    setLastMetrics(null);
  };

  return (
    <section id="architecture" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive System Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Microservices & Redis Pipeline Simulator
          </h2>
          <p className="text-neutral-400 text-base mt-2">
            Experience how I engineer low-latency architectures with Node.js, Redis In-Memory caching, and SQL database optimization.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 md:p-8 shadow-2xl backdrop-blur-md">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-neutral-800">
            
            {/* Endpoint Selector */}
            <div className="space-y-1.5 flex-1">
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                1. Select Simulated API Request:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {sampleSimulationEndpoints.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setSelectedEndpointId(ep.id);
                      handleReset();
                    }}
                    id={`sim-endpoint-${ep.id}`}
                    className={`p-2.5 text-left rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                      selectedEndpointId === ep.id
                        ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300 font-semibold shadow-sm'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="block font-bold text-white truncate">{ep.name}</span>
                    <span className="text-[11px] text-neutral-500 truncate block mt-0.5">{ep.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Redis Toggle & Run Button */}
            <div className="flex flex-wrap items-center gap-4 lg:self-end">
              {/* Redis Cache Toggle */}
              <div className="flex items-center gap-3 bg-neutral-950 px-4 py-2.5 rounded-xl border border-neutral-800">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5">
                    <Zap className={`w-3.5 h-3.5 ${isRedisEnabled ? 'text-red-400' : 'text-neutral-500'}`} />
                    Redis Cache
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {isRedisEnabled ? 'Cache-Aside (Warmed)' : 'Bypass to SQL'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsRedisEnabled(!isRedisEnabled);
                    handleReset();
                  }}
                  id="sim-toggle-redis"
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    isRedisEnabled ? 'bg-red-500' : 'bg-neutral-800'
                  }`}
                  aria-label="Toggle Redis Cache"
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      isRedisEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Action Buttons */}
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                id="sim-run-btn"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isSimulating ? 'Processing Flow...' : 'Send Request'}</span>
              </button>

              <button
                onClick={handleReset}
                id="sim-reset-btn"
                className="p-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-all cursor-pointer"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Visual Architecture Flow Pipeline */}
          <div className="relative py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              {/* Step 1: Client */}
              <div 
                id="arch-step-client"
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  currentStep >= 0 
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 ring-1 ring-cyan-500/30' 
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Node 01</span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>React Client / User</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Dispatches <code className="text-cyan-300 text-[11px] font-mono">{selectedEndpoint.name.split(' ')[1]}</code>
                </p>
                {currentStep >= 0 && (
                  <div className="mt-3 pt-2 border-t border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Sent @ 0.0ms
                  </div>
                )}
              </div>

              {/* Step 2: Node.js API Gateway & Microservices */}
              <div 
                id="arch-step-gateway"
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  currentStep >= 1 
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/30' 
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Node 02</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <span>Node.js API Gateway</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Rate limiter & JWT auth validation check.
                </p>
                {currentStep >= 1 && (
                  <div className="mt-3 pt-2 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Auth OK (+{selectedEndpoint.serviceProcessingTime}ms)
                  </div>
                )}
              </div>

              {/* Step 3: Redis In-Memory Layer */}
              <div 
                id="arch-step-redis"
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  currentStep >= 2 
                    ? isRedisEnabled 
                      ? 'bg-red-500/10 border-red-500/50 text-red-300 ring-1 ring-red-500/30' 
                      : 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Node 03</span>
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                </div>
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Zap className="w-4 h-4 text-red-400" />
                  <span>Redis Cache Layer</span>
                </div>
                <p className="text-xs text-neutral-400">
                  {isRedisEnabled ? 'In-Memory Cache Key Lookup' : 'Cache Bypassed / Miss'}
                </p>
                {currentStep >= 2 && (
                  <div className="mt-3 pt-2 border-t border-neutral-700/50 text-[11px] font-mono flex items-center gap-1">
                    {isRedisEnabled ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> CACHE HIT ({selectedEndpoint.redisCacheTime}ms)
                      </span>
                    ) : (
                      <span className="text-amber-400 font-bold">CACHE MISS ➔ FALLTHROUGH</span>
                    )}
                  </div>
                )}
              </div>

              {/* Step 4: SQL Database */}
              <div 
                id="arch-step-sql"
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  currentStep >= 3 
                    ? 'bg-blue-500/10 border-blue-500/50 text-blue-300 ring-1 ring-blue-500/30' 
                    : !isRedisEnabled && currentStep >= 2
                    ? 'bg-blue-500/10 border-blue-500/50 text-blue-300'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Node 04</span>
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>SQL Relational DB</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Indexed ACID storage with connection pooling.
                </p>
                {currentStep >= 3 ? (
                  <div className="mt-3 pt-2 border-t border-blue-500/20 text-[11px] font-mono text-blue-300 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Queried (+{selectedEndpoint.dbQueryTime}ms)
                  </div>
                ) : isRedisEnabled && currentStep >= 4 ? (
                  <div className="mt-3 pt-2 border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
                    💤 Skipped (Saved 100% DB Load)
                  </div>
                ) : null}
              </div>

            </div>
          </div>

          {/* Real-time Telemetry Readout & Query Inspection */}
          {simulationCompleted && lastMetrics && (
            <div 
              id="sim-results-card"
              className="mt-6 p-5 rounded-xl bg-neutral-950 border border-neutral-800 animate-in fade-in duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${lastMetrics.cacheHit ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Request Cycle Completed
                    </h4>
                    <span className="text-xs text-neutral-400 font-mono">
                      {lastMetrics.cacheHit ? '⚡ High-speed In-Memory Resolution' : '🔍 SQL Direct Query with Execution Plan'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono">
                  <div>
                    <span className="text-neutral-500 block">Total Latency:</span>
                    <span className={`text-base font-bold ${lastMetrics.totalMs < 10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {lastMetrics.totalMs} ms
                    </span>
                  </div>

                  <div>
                    <span className="text-neutral-500 block">DB Load Relief:</span>
                    <span className="text-base font-bold text-cyan-400">
                      {lastMetrics.savedLoad}
                    </span>
                  </div>

                  <div>
                    <span className="text-neutral-500 block">DB Queries Executed:</span>
                    <span className="text-base font-bold text-white">
                      {lastMetrics.dbQueries}
                    </span>
                  </div>
                </div>
              </div>

              {/* SQL Query Preview */}
              <div className="mt-4 pt-2">
                <div className="flex items-center justify-between mb-1.5 text-xs text-neutral-400">
                  <span className="font-mono flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-neutral-500" />
                    SQL Query Statement (Normalized Schema)
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">PostgreSQL / MySQL</span>
                </div>
                <pre className="p-3 rounded-lg bg-neutral-900 text-xs font-mono text-cyan-300 overflow-x-auto border border-neutral-800">
                  {selectedEndpoint.queryDescription}
                </pre>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
