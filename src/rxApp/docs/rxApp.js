/*jshint unused:false*/

// This file is used to help build the 'demo' documentation page and should be updated with example code
function rxAppCtrl ($scope) {
    $scope.pages = [
        {
            href: '#1',
            text: '1st Order Item'
        },
        {
            href: '#2',
            text: '1st Order Item w/ Children',
            active: 'true',
            children: [
                {
                    href: '#2-1',
                    text: '2nd Order Item'
                },
                {
                    href: '#2-2',
                    text: '2nd Order Item w/ Children',
                    active: 'true',
                    children: [
                        {
                            href: '#2-2-1',
                            text: '3nd Order Item'
                        },
                        {
                            href: '#2-2-2',
                            text: '3nd Order Item w/ children',
                            active: true,
                            children: [
                                {
                                    href: '#2-2-2-1',
                                    text: '4th Order Item'
                                },
                                {
                                    href: '#2-2-2-2',
                                    text: '4th Order Item',
                                    active: true
                                }
                            ]
                        },
                        {
                            href: '#2-2-3',
                            text: '3nd Order Item'
                        }
                    ]
                },
                {
                    href: '#2-3',
                    text: '2nd Order Item'
                }
            ]
        },
        {
            href: '#3',
            text: '1st Order Item'
        }
    ];
}