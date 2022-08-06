import EthAccount from 'components/EthAccount'
import useDetails from 'hooks/useDetails'
import Link from 'next/link'
import { FC } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FiAlertCircle } from 'react-icons/fi'

type Props = {
  details: ReturnType<typeof useDetails>
  bannedOnOpenSea: boolean
}

const Owner: FC<Props> = ({ details, bannedOnOpenSea }) => {
  const token = details.data?.tokens?.[0]

  const owner =
    token?.token?.kind === 'erc1155' && token?.market?.floorAsk?.maker
      ? token?.market?.floorAsk?.maker
      : token?.token?.owner

  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      <article className="col-span-full rounded-2xl border border-gray-300 bg-white p-6 dark:border-neutral-600 dark:bg-transparent">

        {/* {token?.token?.kind === 'erc1155' && (
          <div className="mb-4 flex justify-evenly">
            <div className="flex items-center gap-2">
              <FiUsers className="h-4 w-4" />
              <span className="reservoir-h5 ">Owners</span>
            </div>
            <div className="flex items-center gap-2">
              <FiDatabase className="h-4 w-4" />
              <span className="reservoir-h5 ">Total</span>
            </div>
          </div>
        )} */}

        <div className="reservoir-h6 mb-2 font-headings dark:text-white">
          Owner
        </div>
        {owner && (
          <Link href={`/address/${owner}`}>
            <a className="inline-block">
              <EthAccount address={owner} side="left" />
            </a>
          </Link>
        )}
      </article>
    </div>
  )
}

export default Owner
