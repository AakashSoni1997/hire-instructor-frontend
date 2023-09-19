import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const TheContent = () => {
	return (
		<main className="main-content">
			<Suspense>
				<Switch>
					{routes.map((route, idx) => {
						return (
							route.component && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={(props) => <route.component {...props} />}
								/>
							)
						);
					})}
				</Switch>
			</Suspense>
		</main>
	);
};

export default React.memo(TheContent);
