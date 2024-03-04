import { cn } from "@/lib/utils"
import { Address } from "viem"

const supportedDomains = [
  {
    domain: 'zorasepolia.xyz',
    optimismPortalProxyAddress:'0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f',
  },
  {
    domain: 'basesepolia.xyz',
    optimismPortalProxyAddress:'0x49f53e41452C74589E85cA1677426Ba426459e85',
  },
  {
    domain: 'opsepolia.xyz',
    optimismPortalProxyAddress:'0x16Fc5058F25648194471939df75CF27A2fdC48BC',
  }

] as const satisfies { domain:string, optimismPortalProxyAddress: Address }[]


function App() {
  console.log(window.location.hostname)

  return (
    <div className="flex flex-col p-10">
      <div className="text-lg font-semibold">OptimismPortalProxy addresses</div>
      <div>Source of truth: <a className="underline" href="https://github.com/ethereum-optimism/superchain-registry/tree/main/superchain/extra/addresses/sepolia">Superchain Registry</a></div>
      <div className="flex flex-col">
        <div className='font-semibold'>
          Following domains should resolve to the addresses on ENS (try pasting into Metamask)
        </div>
      {
        supportedDomains.map(({ domain, optimismPortalProxyAddress }) => {
          const isCurrentDomain = window.location.hostname.includes(domain)
          return (
            <div key={domain} className={cn('flex', isCurrentDomain && 'font-semibold')}>
              <div className="w-32">{domain}</div>
              <div className="w-64">{optimismPortalProxyAddress}</div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
