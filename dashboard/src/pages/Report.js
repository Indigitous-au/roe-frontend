import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import InfoCard from '../components/Cards/InfoCard'
import {Card, CardBody} from '@windmill/react-ui'
import {ChatIcon} from '../icons'
import RoundIcon from '../components/RoundIcon'
import { Textarea } from '@windmill/react-ui'


function Report() {
    return (
        <>
            <PageTitle>Report</PageTitle>

            <SectionTitle>Responsive cards</SectionTitle>

            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <InfoCard title="Report No." value="223">
                    <RoundIcon
                        icon={ChatIcon}
                        iconColorClass="text-orange-500 dark:text-orange-100"
                        bgColorClass="bg-orange-100 dark:bg-orange-500"
                        className="mr-4"
                    />
                </InfoCard>

                <InfoCard title="Reported On" value="10/01/2022">
                    <RoundIcon
                        icon={ChatIcon}
                        iconColorClass="text-green-500 dark:text-green-100"
                        bgColorClass="bg-green-100 dark:bg-green-500"
                        className="mr-4"
                    />
                </InfoCard>

                <InfoCard title="Reporter" value="A child (12.34.55.66)">
                    <RoundIcon
                        icon={ChatIcon}
                        iconColorClass="text-blue-500 dark:text-blue-100"
                        bgColorClass="bg-blue-100 dark:bg-blue-500"
                        className="mr-4"
                    />
                </InfoCard>

                <InfoCard title="Suspect" value="A predator">
                    <RoundIcon
                        icon={ChatIcon}
                        iconColorClass="text-teal-500 dark:text-teal-100"
                        bgColorClass="bg-teal-100 dark:bg-teal-500"
                        className="mr-4"
                    />
                </InfoCard>
            </div>

            <SectionTitle>Screen</SectionTitle>

            <div className="grid gap-6 mb-8 md:grid-cols-1">
                <Card>
                    <CardBody>
                        <img
                            src="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=bing.com"
                            alt="Screenshot"/>
                    </CardBody>
                </Card>
            </div>

            <SectionTitle>Comments</SectionTitle>

            <div className="grid gap-6 mb-8 md:grid-cols-1">
                <Card>
                    <CardBody>
                        <Textarea className="mt-1" rows="3" placeholder="Case comments"/>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Report
